<?php
Auth::routes();
Route::get('/{vue?}', function () {
    return view('app');
})->where('vue', '[\/\w\.-]*')->name('app');

// Route::get('/home', 'HomeController@index')->name('home');
