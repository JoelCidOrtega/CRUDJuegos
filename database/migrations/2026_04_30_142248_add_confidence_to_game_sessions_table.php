<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('game_sessions', function (Blueprint $table) {
            $table->decimal('confidence', 5, 4)->nullable()->after('emotion');
            $table->timestamp('emotion_detected_at')->nullable()->after('confidence');
        });
    }

    public function down(): void
    {
        Schema::table('game_sessions', function (Blueprint $table) {
            $table->dropColumn(['confidence', 'emotion_detected_at']);
        });
    }
};
