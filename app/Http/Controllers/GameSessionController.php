<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GameSession;
use Illuminate\Support\Facades\Auth;

class GameSessionController extends Controller
{
    public function saveEmotion(Request $request)
    {
        $validated = $request->validate([
            'emotion'    => 'required|string|in:happy,sad,angry,surprised,neutral,fearful,disgusted',
            'confidence' => 'required|numeric|min:0|max:1',
            'game_id'    => 'required|integer|exists:games,id',
        ]);

        // Busca o crea la sesión activa del usuario para este juego
        $session = GameSession::firstOrCreate(
            ['user_id' => Auth::id(), 'game_id' => $validated['game_id'], 'ended_at' => null],
            ['started_at' => now()]
        );

        $session->update([
            'emotion'             => $validated['emotion'],
            'confidence'          => $validated['confidence'],
            'emotion_detected_at' => now(),
        ]);

        return response()->json([
            'success'    => true,
            'emotion'    => $validated['emotion'],
            'confidence' => $validated['confidence'],
        ]);
    }
}
