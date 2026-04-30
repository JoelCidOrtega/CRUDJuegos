<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameEmotion extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'game_id',
        'emotion',
        'confidence'
    ];

    // Relación con el usuario
    public function user() {
        return $this->belongsTo(User::class);
    }
}
