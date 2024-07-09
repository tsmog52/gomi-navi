<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\SocialAuthController;

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

Route::get('/items', [ItemController::class, 'index'])->name('item');

// GoogleAuthのルート
Route::get('login/google', [SocialAuthController::class, 'redirectToGoogle']);
Route::get('login/google/callback', [SocialAuthController::class, 'handleGoogleCallback']);

// LINEAuthのルート
Route::get('login/line', [SocialAuthController::class, 'redirectToLine']);
Route::get('login/line/callback', [SocialAuthController::class, 'handleLineCallback']);


//ログアウト処理
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');