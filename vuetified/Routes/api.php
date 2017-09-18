<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware('auth:api')->group(function () {
    Route::post('logout', 'Vuetified\Http\Controllers\Api\Auth\LoginController@logout')->name('api.auth.logout');
});
Route::post('register', 'Vuetified\Http\Controllers\Api\Auth\RegisterController@register')->name('api.auth.register');
Route::post('login', 'Vuetified\Http\Controllers\Api\Auth\LoginController@login')->name('api.auth.login');
Route::post('refresh', 'Vuetified\Http\Controllers\Api\Auth\LoginController@refresh')->name('api.auth.refresh');
Route::post('social_auth', 'Vuetified\Http\Controllers\Api\Auth\SocialAuthController@socialAuth')->name('api.auth.social');
