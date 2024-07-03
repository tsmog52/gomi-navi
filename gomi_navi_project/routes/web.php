<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\PersonalAccessToken;

// お問い合わせ
Route::view('/contact', 'contact');
// カレンダー
Route::view('/calendar', 'calendar');
// ゴミの分別検索
Route::view('/item', 'item');
// カテゴリー
Route::view('/category', 'categories');
// メイン
Route::view('/', 'app')->name('home');


// OAuth認証するためのURLにリダイレクトする(カレンダー)
Route::get('auth/redirect', function() {
    return Socialite::driver('google')
    ->scopes(['https://www.googleapis.com/auth/calendar.events'])
    ->with(['access_type' => 'offline'])
    ->redirect();
});

// ユーザー認証
Route::get('/auth/callback', function() {
    $social_user = Socialite::driver('google')->user();

  // 既存のユーザーの検索
    $user = User::where('provider_id', $social_user->getId())
        ->where('provider', 'google')
        ->first();

    if (!$user) {
      // ユーザーが存在しない場合、新規作成
        $user = User::create([
            'provider_id' => $social_user->getId(),
            'provider' => 'google',
        ]);
    }

  // PersonalAccessTokenの検索または新規作成
    $personalAccessToken = PersonalAccessToken::updateOrCreate(
        [
            'user_id' => $user->id,
        ],
        [
            'token' => $social_user->token,
            'refresh_token' => $social_user->refreshToken,
            'expires_at' => Carbon::now()->addSeconds($social_user->expiresIn),
        ]
    );

  // ユーザーログイン
    Auth::login($user);

    return redirect('/');
});

//ログアウト処理
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

