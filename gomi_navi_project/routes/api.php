<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\SchedulePatternsController;
use App\Http\Controllers\SortingGuidesController;
use App\Http\Controllers\SchedulesController;
use App\Models\Item;

//認証不要なルート
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/schedule_patterns', [SchedulePatternsController::class, 'index']);
Route::get('/instruction', [SortingGuidesController::class, 'index']);
Route::get('/items', [ItemController::class, 'index']);
Route::get('/calendar', [SchedulesController::class, 'index']);
Route::get('/item', function () {
  return Item::paginate();
});

// API トークンを発行するエンドポイント(ユーザー認証済みかを確認)
Route::middleware('auth:sanctum')->post('/tokens/create', function (Request $request) {
  // 認証されたユーザーのみがアクセスできる
  $user = $request->user();
  $token = $user->createToken('auth_token')->plainTextToken;

  return response()->json(['token' => $token]);
});


