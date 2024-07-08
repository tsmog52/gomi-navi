<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use App\Models\SocialAccount;
use App\Models\SocialPersonalAccessToken;
use Carbon\Carbon;

class GoogleAuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback()
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

        return redirect('/');
    }
}
