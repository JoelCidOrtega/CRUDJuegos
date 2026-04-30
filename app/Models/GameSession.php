<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GameSession extends Model
{
    protected $fillable = [
        'user_id',
        'game_id',
        'started_at',
        'ended_at',
        'score',
        'emotion',
        'confidence',
        'emotion_detected_at',
    ];

    protected function casts(): array
    {
        return [
            'started_at'          => 'datetime',
            'ended_at'            => 'datetime',
            'emotion_detected_at' => 'datetime',
            'confidence'          => 'decimal:4',
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function game()
    {
        return $this->belongsTo(Game::class);
    }
}
