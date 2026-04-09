<?php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();
$games = App\Models\Game::all();
foreach($games as $game) {
    if (str_contains($game->url, '/games/')) {
        $game->update(['url' => str_replace('/games/', '/juegos3d/', $game->url)]);
    }
}
echo "URLs corregidas.\n";
