<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\GameEmotion;
use Illuminate\Http\Request;

class EmotionController extends Controller
{
    public function store(Request $request)
    {
        // 1. Laravel valida rigurosamente los datos (Solo datos abstractos)
        $validated = $request->validate([
            'game_id' => 'required|integer',
            'emotion' => 'required|string|max:50',
            'confidence' => 'required|numeric|min:0|max:1',
        ]);

        // 2. Guardamos la emoción asociada al usuario autenticado (Seguridad centralizada)
        $emotionLog = GameEmotion::create([
            'user_id' => auth()->id(), // Laravel decide quién es
            'game_id' => $validated['game_id'],
            'emotion' => $validated['emotion'],
            'confidence' => $validated['confidence'],
        ]);

        return response()->json([
            'message' => 'Emoción registrada correctamente de forma abstracta.',
            'data' => $emotionLog
        ], 201);
    }
}
