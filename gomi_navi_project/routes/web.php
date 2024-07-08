<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\GoogleAuthController;
use App\Http\Controllers\ItemController;

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

Route::middleware(['web'])->group(function () {
    Route::get('auth/redirect', [GoogleAuthController::class, 'redirect']);
    Route::get('/auth/callback', [GoogleAuthController::class, 'callback']);
});

//ログアウト処理
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');