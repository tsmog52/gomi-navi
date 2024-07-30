<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\LineController;
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
//アイテムの別検索
Route::get('/items', [ItemController::class, 'index'])->name('item');
//プライバシーポリシー
Route::view('/privacy', 'privacy');
//利用規約
Route::view('/terms', 'terms');


//CSRFトークンを取得するためのエンドポイント
Route::get('/sanctum/csrf-cookie', function () {
  return response()->json();
});

// GoogleAuthのルート
Route::get('login/google', [SocialAuthController::class, 'redirectToGoogle'])->name('login');
Route::get('login/google/callback', [SocialAuthController::class, 'handleGoogleCallback']);

// LINEAuthのルート
// 旧
// Route::get('auth/line', [SocialAuthController::class, 'redirectToLine']);
// Route::get('auth/line/callback', [SocialAuthController::class, 'handleLineCallback']);

// 新
Route::get('auth/line', [LineController::class, 'redirectToLine']);
Route::get('auth/line/callback', [LineController::class, 'handleLineCallback']);
