<?php

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
//アイテムの別検索
Route::get('/items', [ItemController::class, 'index'])->name('item');

//CSRFトークンを取得するためのエンドポイント
Route::get('/sanctum/csrf-cookie', function () {
  return response()->json();
});


// GoogleAuthのルート
Route::get('login/google', [SocialAuthController::class, 'redirectToGoogle']);
Route::get('login/google/callback', [SocialAuthController::class, 'handleGoogleCallback']);

Route::get('/login', function () {
  return view('login');
});
Route::get('auth/line', [SocialAuthController::class, 'redirectToLine'])->name('line.login');
Route::get('auth/line/callback', [SocialAuthController::class, 'handleLineCallback']);

