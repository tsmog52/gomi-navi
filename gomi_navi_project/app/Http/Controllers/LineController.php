<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\SocialAccount;
use Carbon\Carbon;
use App\Models\PersonalAccessToken;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;

class LineController extends Controller
{
    public function redirectToLine()
    {
        return Socialite::driver('line')->redirect();
    }

    public function lineLogin()
    {
        $state = Str::random(32);
        $nonce = Str::random(32);

        $uri = "https://access.line.me/oauth2/v2.1/authorize";
        $queryParams = http_build_query([
            'response_type' => 'code',
            'client_id' => config('services.line.client_id'),
            'redirect_uri' => config('services.line.redirect'),
            'state' => $state,
            'bot_prompt' => 'aggressive',
            'scope' => 'openid profile add_friend',
            'nonce' => $nonce,
            'prompt' => 'consent'
        ]);
        $fullUri = $uri . '?' . $queryParams;
        return redirect($fullUri);
    }

    public function getAccessToken(Request $request)
    {
        $headers = ['Content-Type: application/x-www-form-urlencoded'];
        $post_data = [
            'grant_type'    => 'authorization_code',
            'code'          => $request->input('code'),
            'redirect_uri'  => config('services.line.redirect'),
            'client_id'     => config('services.line.client_id'),
            'client_secret' => config('services.line.client_secret'),
        ];
        $url = 'https://api.line.me/oauth2/v2.1/token';

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($post_data));

        $res = curl_exec($curl);
        curl_close($curl);

        // レスポンスの内容をデバッグ
        $json = json_decode($res, true);

        if (isset($json['access_token'])) {
            return $json;
        } else {
            // エラー内容をデバッグ
            throw new \Exception('Access token not found in response: ' . json_encode($json));
        }
}

    public function getProfile($accessToken)
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_HTTPHEADER, ['Authorization: Bearer ' . $accessToken]);
        curl_setopt($curl, CURLOPT_URL, 'https://api.line.me/v2/profile');
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

        $res = curl_exec($curl);
        curl_close($curl);

        $json = json_decode($res);

        if (isset($json->userId)) {
            return $json;
        } else {
            throw new \Exception('Profile information not found in response: ' . json_encode($json));
        }
    }

    public function refreshAccessToken($refreshToken)
{
    $headers = ['Content-Type: application/x-www-form-urlencoded'];
    $post_data = [
        'grant_type'    => 'refresh_token',
        'refresh_token' => $refreshToken,
        'client_id'     => config('services.line.client_id'),
        'client_secret' => config('services.line.client_secret'),
    ];
    $url = 'https://api.line.me/oauth2/v2.1/token';

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($post_data));

    $res = curl_exec($curl);
    curl_close($curl);

    $json = json_decode($res, true);

    if (isset($json['access_token'])) {
        return $json;
    } else {
        throw new \Exception('Unable to refresh access token: ' . json_encode($json));
    }
}


    public function callback(Request $request)
    {
        try {
            //キャンセルされた場合はtopへ
            if($request->has('error')) {
                return redirect('https://gomi-navi.net/');
            }

            // アクセストークンを取得
            $tokenData = $this->getAccessToken($request);

            // プロフィール情報を取得
            $profile = $this->getProfile($tokenData['access_token']);

            // ソーシャルアカウントの作成または更新
            $socialAccount = SocialAccount::updateOrCreate(
                [
                    'provider_id' => $profile->userId,
                    'provider' => 'line',
                ],
                [
                    'line_token' => $tokenData['access_token'],
                    // 必要に応じてリフレッシュトークンを取得
                    'line_refresh_token' => $tokenData['refresh_token'] ?? null
                ]
            );

            // ソーシャルアカウントに関連付けられたユーザーがいない場合
            if (!$socialAccount->user) {
                // ユーザーを新規作成
                $user = User::create([
                    // 必要なユーザー情報を設定
                ]);

                // ソーシャルアカウントにユーザーを関連付ける
                $socialAccount->user_id = $user->id;
                $socialAccount->save();
            } else {
                // 既存のユーザーを取得
                $user = $socialAccount->user;
            }

            // トークン情報を更新
            PersonalAccessToken::updateOrCreate(
                [
                    'user_id' => $user->id,
                ],
                [
                    'token' => $tokenData['access_token'],
                    'refresh_token' => $tokenData['refresh_token'] ?? null,
                    'expires_at' => Carbon::now()->addSeconds($tokenData['expires_in']),
                ]
            );

            // ユーザーをログイン
            Auth::login($user);

            // クッキーにアクセストークンをセット
            $accessTokenCookie = cookie('access_token', $tokenData['access_token'], 1440, null, null, false, false, false, 'Strict');
            $userIdCookie = cookie('user_id', $user->id, 1440, null, null, false, false, false, 'Strict');
            // dd($accessTokenCookie);
            // dd($userIdCookie);

            return redirect()->to('/')
                ->withCookie($accessTokenCookie)
                ->withCookie($userIdCookie);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error: ' . $e->getMessage()], 500);
        }
    }
}