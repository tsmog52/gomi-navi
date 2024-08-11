<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\SchedulePatternsController;
use App\Http\Controllers\SortingGuidesController;
use App\Http\Controllers\SchedulesController;
use App\Http\Controllers\CsrfTokenController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\ScheduleMemoController;
use App\Models\Item;

//認証不要なルート
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/schedule_patterns', [SchedulePatternsController::class, 'index']);
Route::get('/instruction', [SortingGuidesController::class, 'index']);
Route::get('/calendar', [SchedulesController::class, 'index']);
Route::get('/items', [ItemController::class, 'index']);
Route::get('/item', function () {
  return Item::paginate();
});
Route::get('/items/all', [ItemController::class, 'allItems']);


//ログアウト処理
Route::post('/logout', [LogoutController::class, 'logout']);

//メモ関連
Route::get('/memo', [ScheduleMemoController::class, 'index']);
Route::post('/memo/create', [ScheduleMemoController::class, 'store']);
Route::delete('/memo/{id}', [ScheduleMemoController::class, 'destroy']);
Route::put('/memo/{id}', [ScheduleMemoController::class, 'update']);
Route::get('/memo/{id}', [ScheduleMemoController::class, 'show']);

Route::middleware('auth:sanctum')->get('/sanctum/csrf-cookie', [CsrfTokenController::class, 'getCsrfCookie']);

