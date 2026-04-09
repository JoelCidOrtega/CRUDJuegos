<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\GameController;
use App\Models\Game;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::middleware(['auth', 'verified'])->group(function () {
    
    // Dashboard para el jugador (y admin/gestor también lo pueden ver)
    Route::get('/dashboard', function () {
        $games = Game::where('is_published', true)->get();
        return Inertia::render('Dashboard', ['games' => $games]);
    })->name('dashboard');

    // Jugar a un juego
    Route::get('/play/{game}', function (Game $game) {
        if (!$game->is_published && !request()->user()->hasRole(['administrador', 'gestor'])) {
            abort(403, 'Juego no disponible.');
        }
        return Inertia::render('PlayGame', ['game' => $game]);
    })->name('games.play');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Rutas del CRM protegidas
    Route::middleware('role:administrador,gestor')->group(function () {
        Route::resource('crm-games', GameController::class)->parameters(['crm-games' => 'game'])->names('games');
    });

    // Rutas de administración exclusivas
    Route::middleware('role:administrador')->group(function () {
        Route::resource('users', App\Http\Controllers\UserController::class);
    });
});

require __DIR__.'/auth.php';
