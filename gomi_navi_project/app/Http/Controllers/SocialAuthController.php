<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use App\Models\SocialAccount;
use App\Models\User;
use App\Models\SocialPersonalAccessToken;
use Carbon\Carbon;


class SocialAuthController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        $googleUser = Socialite::driver('google')->stateless()->user();

        // 既存のユーザーの検索または新規作成
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
        //新しいユーザーの取得
        if(!$user) {
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
        //トークンの発行
        $token = $user->createToken('auth_token')->plainTextToken;
        //セッションフラッシュにトークンを保存
        session(['auth_token' => $token]);

        return redirect('/');
    }

    public function redirectToLine()
    {
        return Socialite::driver('line')->redirect();
    }

    public function handleLineCallback()
    {
        $lineUser = Socialite::driver('line')->stateless()->user();
        // 既存のユーザーの検索または新規作成
        $socialAccount = SocialAccount::updateOrCreate(
            [
                'provider_id' => $lineUser->getId(),
                'provider' => 'line',
            ],
            [
                'line_token' => $lineUser->token,
                'line_refresh_token' => $lineUser->refreshToken,
            ]
        );

        //ユーザーの取得
        $user = $socialAccount->user;
        if(!$user) {
            $user = User::create();
        }

        //user_idの設定
        $socialAccount->user_id = $user->id;
        $socialAccount->save();

        //PersonalAccessTokenの検索または新規作成
        $personalAccessToken = SocialPersonalAccessToken::updateOrCreate(
            [
                'user_id' => $user->id,
            ],
            [
                'token' => $lineUser->token,
                'refresh_token' => $lineUser->refreshToken ?? null,
                'expires_at' => Carbon::now()->addSecond($lineUser->expiresIn),
            ]
        );

        //ユーザーログイン
        Auth::login($user);

        //トークンの発行
        $token = $user->createToken('auth_token')->plainTextToken;

        //セッションに保存
        session(['auth_token' => $token]);

        return redirect('/');
    }
}

