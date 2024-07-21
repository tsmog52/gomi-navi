<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use App\Models\SocialAccount;
use App\Models\User;
use App\Models\SocialPersonalAccessToken;
use Carbon\Carbon;

class SocialAuthController extends Controller
{
    //共通化させる
    public function redirectToGoogle()
    {
        return Socialite::driver('google')
            ->with(['access_type' => 'offline'])
            ->redirect();
    }

    public function handleGoogleCallback()
{
    try {
        $googleUser = Socialite::driver('google')->stateless()->user();

        // 既存のユーザーの検索または新規作成(リフレッシュトークンの保存)
        $socialAccount = SocialAccount::updateOrCreate(
            [
                'provider_id' => $googleUser->getId(),
                'provider' => 'google',
            ],
            [
                'google_token' => $googleUser->token,
                'google_refresh_token' => $googleUser->refreshToken,
            ]
        );

        // ユーザーの取得
        $user = $socialAccount->user;

        // 新しいユーザーの取得
        if (!$user) {
            $user = User::create();
        }

        // user_id を設定する
        $socialAccount->user_id = $user->id;
        $socialAccount->save();

        // PersonalAccessTokenの検索または新規作成
        $personalAccessToken = SocialPersonalAccessToken::updateOrCreate(
            [
                'user_id' => $user->id,
            ],
            [
                'token' => $googleUser->token,
                'refresh_token' => $googleUser->refreshToken ?? null,
                'expires_at' => Carbon::now()->addSeconds($googleUser->expiresIn),
            ]
        );

        // ユーザーログイン
        Auth::login($user);

        //フロントエンドのURLにリダイレクトさせる
        $redirectUrl = 'http://127.0.0.1:8000/';

        // JSONレスポンスを返す
        return redirect()->to($redirectUrl)
        ->with('user_id', $user->id);
    } catch (\Exception $e) {
        dd($e); // エラーが発生した場合、エラー情報を表示
    }
}

    public function redirectToLine()
    {
        return Socialite::driver('line')->redirect();
    }

    public function handleLineCallback()
    {
        // try {
        //     $lineUser = Socialite::driver('line')->user();

        //     // 既存のユーザーの検索または新規作成
        //     $socialAccount = SocialAccount::updateOrCreate(
        //         [
        //             'provider_id' => $lineUser->getId(),
        //             'provider' => 'line',
        //         ],
        //         [
        //             'line_token' => $lineUser->token,
        //             'line_refresh_token' => $lineUser->refreshToken,
        //         ]
        //     );

        //     // ユーザーの取得
        //     $user = $socialAccount->user;

        //     // 新しいユーザーの取得
        //     if (!$user) {
        //         $user = User::create();
        //     }

        //     // user_id を設定する
        //     $socialAccount->user_id = $user->id;
        //     $socialAccount->save();

        //     // PersonalAccessTokenの検索または新規作成
        //     $personalAccessToken = SocialPersonalAccessToken::updateOrCreate(
        //         [
        //             'user_id' => $user->id,
        //         ],
        //         [
        //             'token' => $lineUser->token,
        //             'refresh_token' => $lineUser->refreshToken ?? null,
        //             'expires_at' => Carbon::now()->addSeconds($lineUser->expiresIn),
        //         ]
        //     );

        //     // ユーザーログイン
        //     Auth::login($user);

        //     // メインページにリダイレクト
        //     return redirect('http://127.0.0.1:8000');
        // } catch (\Exception $e) {
        //     return response()->json(['error' => 'Error in line callback: ' . $e->getMessage()], 500);
        // }
        $user = Socialite::driver('line')->user();

        dd($user);
    }

}
