<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Game;
use App\Models\GameSession;

class GameSessionController extends Controller
{
    public function start(Request $request)
    {
        $validated = $request->validate([
            'game_id' => 'required|exists:games,id',
        ]);

        $game = Game::findOrFail($validated['game_id']);

        if (!$game->is_published && !$request->user()->hasRole(['administrador', 'gestor'])) {
            return response()->json(['message' => 'Juego no disponible.'], 403);
        }

        $session = GameSession::create([
            'user_id' => $request->user()->id,
            'game_id' => $game->id,
            'started_at' => now(),
        ]);

        return response()->json([
            'message' => 'Sesión de juego iniciada',
            'session_id' => $session->id
        ], 201);
    }

    public function end(Request $request, GameSession $session)
    {
        if ($session->user_id !== $request->user()->id) {
            return response()->json(['message' => 'No autorizado para esta sesión.'], 403);
        }

        if ($session->ended_at) {
            return response()->json(['message' => 'La sesión ya finalizó previamente.'], 400);
        }

        $validated = $request->validate([
            'score' => 'nullable|integer',
        ]);

        $session->update([
            'ended_at' => now(),
            'score' => $validated['score'] ?? null,
        ]);

        return response()->json([
            'message' => 'Sesión de juego finalizada y datos guardados',
            'session' => $session
        ], 200);
    }
}
