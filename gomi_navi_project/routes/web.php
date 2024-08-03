<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\LineController;
use App\Http\Controllers\GoogleController;

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

//どのURLでも1つのページでレンダリングされるようにする
Route::get('/{any}', function () {
  return view('app');
})->where('any', '.*');

