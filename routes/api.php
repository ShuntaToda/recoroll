<?php

use App\Http\Controllers\BlockController;
use App\Http\Controllers\OAuth\LoginController;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\ProjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return Auth::user();
//     return $request->user();
// });

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/auth/google', [LoginController::class, "redirectToProvider"]);
Route::post('/auth/google/callback', [LoginController::class, "handleProviderCallback"]);

Route::get('/project', [ProjectController::class, "index"])->middleware('auth:sanctum');
Route::post('/project', [ProjectController::class, "store"])->middleware('auth:sanctum');
Route::get('/project/{id}', [ProjectController::class, "show"])->middleware('auth:sanctum');
Route::delete('/project/{id}', [ProjectController::class, "destroy"])->middleware('auth:sanctum');

Route::get('/block/{project_id}', [BlockController::class, "index"])->middleware('auth:sanctum');
Route::post('/block/{project_id}', [BlockController::class, "store"])->middleware('auth:sanctum');
Route::put('/block/{block_id}', [BlockController::class, "update"])->middleware('auth:sanctum');
Route::delete('/block/{block_id}/{project_id}', [BlockController::class, "destroy"])->middleware('auth:sanctum');


Route::post('/photo/{project_id}', [PhotoController::class, "store"])->middleware('auth:sanctum');
Route::get('/photo/{project_id}', [PhotoController::class, "index"])->middleware('auth:sanctum');
