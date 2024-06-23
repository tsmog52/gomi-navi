<?php

use Illuminate\Support\Facades\Route;


Route::view('/contact', 'contact');

Route::get('/{any}', function () {
  return view('app');
})->where('any', '.*');
