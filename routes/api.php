<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GameSessionController;
use App\Http\Controllers\Api\EmotionController;


Route::middleware('auth:sanctum')->post('/game-emotions', [EmotionController::class, 'store']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/game-sessions/start', [GameSessionController::class, 'start']);
    Route::post('/game-sessions/{session}/end', [GameSessionController::class, 'end']);
});
