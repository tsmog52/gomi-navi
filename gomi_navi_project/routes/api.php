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

//認証ルート
Route::middleware('auth:sanctum')->post('/tokens/create/google', [SocialAuthController::class, 'handleGoogleCallback']);
Route::middleware('auth:sanctum')->post('/tokens/create/line', [SocialAuthController::class, 'handleLineCallback']);

Route::get('/tokens/create', [SocialAuthController::class, 'handleGoogleCallback']);


//カレンダーのルート
Route::post('/calendar/event/add', [GoogleCalendarController::class, 'addEvent']);

Route::post('/logout', [LogoutController::class, 'logout'])
  ->middleware('auth:sanctum');

//仮のルート(後で認証ルートに変更)
Route::post('/memos', [ScheduleMemoController::class, 'store']);
