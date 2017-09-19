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
    Route::get('/user',function (Request $request) {
    return $request->user();
    });
});

// Route::get('/orders', function () {
//     // Access token has both "check-status" and "place-orders" scopes...
// })->middleware('scopes:check-status,place-orders');
// Access token has either "check-status" or "place-orders" scope...
// ->middleware('scope:check-status,place-orders')
