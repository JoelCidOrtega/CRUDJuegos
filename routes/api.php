<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GameSessionController;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/game-sessions/start', [GameSessionController::class, 'start']);
    Route::post('/game-sessions/{session}/end', [GameSessionController::class, 'end']);
});
