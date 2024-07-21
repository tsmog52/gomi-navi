<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\SchedulePatternsController;
use App\Http\Controllers\SortingGuidesController;
use App\Http\Controllers\SchedulesController;
use App\Http\Controllers\SocialAuthController;
use App\Http\Controllers\GoogleCalendarController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\ScheduleMemoController;
use Illuminate\Http\Request;
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


Route::get('/memo', [ScheduleMemoController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
  Route::post('/memo/create', [ScheduleMemoController::class, 'store']);
  Route::delete('/memo/{id}', [ScheduleMemoController::class, 'destroy']);
  Route::put('/memo/{id}', [ScheduleMemoController::class, 'update']);
  Route::get('/memo/{id}', [ScheduleMemoController::class, 'show']);
});



//ユーザーのログイン状態チェック用
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//   return $request->user();
// });


//認証ルート
Route::middleware('auth:sanctum')->post('/tokens/create/google', [SocialAuthController::class, 'handleGoogleCallback']);
Route::middleware('auth:sanctum')->post('/tokens/create/line', [SocialAuthController::class, 'handleLineCallback']);
