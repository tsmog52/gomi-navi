<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\LineController;
use App\Http\Controllers\GoogleController;

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
Route::get('login/google', [GoogleController::class, 'redirectToGoogle']);
Route::get('login/google/callback', [GoogleController::class, 'handleGoogleCallback']);

// LINEAuthのルート
Route::get('auth/line', [LineController::class, 'redirectToLine']);
Route::get('auth/line/callback', [LineController::class, 'callback']);

//LINEメッセージ受信用
Route::post('/line/webhook', [LineController::class, 'webhook']);

//LINEメッセージ送信用
Route::get('/line/message', [LineController::class, 'message']);