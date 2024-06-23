<?php

use Illuminate\Support\Facades\Route;


Route::view('/contact', 'contact');

Route::view('/sorting_guide', 'sorting_guide');

Route::view('/calender', 'calender');

Route::view('/sorting_search', 'sorting_search');



Route::get('/{any}', function () {
  return view('app');
})->where('any', '.*');
