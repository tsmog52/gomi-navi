<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\SchedulePatternsController;
use App\Http\Controllers\SortingGuidesController;
use App\Http\Controllers\SchedulesController;
use App\Models\ScheduleMemo;
use App\Models\Item;
use App\Models\SortingGuide;


Route::get('/categories', [CategoryController::class, 'index']);

Route::get('/schedule_patterns', [SchedulePatternsController::class, 'index']);

Route::get('/instruction', [SortingGuidesController::class, 'index']);

Route::get('/items', [ItemController::class, 'index']);

Route::get('/calendar', [SchedulesController::class, 'index']);

Route::get('/item', function () {
  return Item::paginate();
});

// フロントで'/api/example'のURLが叩かれたらExampleControllerのsave関数を呼び出す
Route::group(['middleware' => 'api'], function () {
  Route::post('/schedule_memo', [ScheduleMemo::class, 'save']);
});



