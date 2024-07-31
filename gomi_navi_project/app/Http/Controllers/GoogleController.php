<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use App\Models\SocialAccount;
use App\Models\User;
use App\Models\SocialPersonalAccessToken;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class GoogleController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();

            Log::info('Google User Token: ' . $googleUser->token);

            // ソーシャルアカウントの更新または作成
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

            $user = $socialAccount->user;
            if (!$user) {
                $user = User::create();
            }

            $socialAccount->user_id = $user->id;
            $socialAccount->save();

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

            Auth::login($user);

            // クッキーにアクセストークン、ユーザーIDをセット
            $accessTokenCookie = cookie('access_token', $googleUser->token, 1440, null, null, false, false, false, 'Strict');
            $userIdCookie = cookie('user_id', $user->id, 1440, null, null, false, false, false, 'Strict');

            return redirect()->to('/')
                ->withCookie($accessTokenCookie)
                ->withCookie($userIdCookie);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error: ' . $e->getMessage()], 500);
        }
    }
}