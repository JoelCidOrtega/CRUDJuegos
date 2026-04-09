<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;
use Inertia\Inertia;

class GameController extends Controller
{
    public function index()
    {
        $games = Game::with('creator')->latest()->get();
        return Inertia::render('Games/Index', ['games' => $games]);
    }

    public function create()
    {
        return Inertia::render('Games/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'is_published' => 'boolean',
            'url' => 'nullable|string',
        ]);

        $validated['created_by_id'] = $request->user()->id;
        $validated['is_published'] = $request->is_published ?? false;

        Game::create($validated);

        return redirect()->route('games.index')->with('success', 'Juego creado exitosamente.');
    }

    public function show(Game $game)
    {
        // Preview mode for CRM
        return Inertia::render('Games/Show', ['game' => $game]);
    }

    public function edit(Game $game)
    {
        return Inertia::render('Games/Edit', ['game' => $game]);
    }

    public function update(Request $request, Game $game)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'is_published' => 'boolean',
            'url' => 'nullable|string',
        ]);

        $validated['is_published'] = $request->is_published ?? false;

        $game->update($validated);

        return redirect()->route('games.index')->with('success', 'Juego actualizado exitosamente.');
    }

    public function destroy(Game $game)
    {
        $game->delete();
        return redirect()->route('games.index')->with('success', 'Juego eliminado exitosamente.');
    }
}
