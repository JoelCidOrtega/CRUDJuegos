<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = [
        'title',
        'description',
        'is_published',
        'url',
        'created_by_id'
    ];

    protected function casts(): array
    {
        return [
            'is_published' => 'boolean',
        ];
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by_id');
    }

    public function sessions()
    {
        return $this->hasMany(GameSession::class);
    }
}
