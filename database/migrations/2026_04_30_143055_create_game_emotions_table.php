<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('game_emotions', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->onDelete('cascade'); // El usuario que juega
        $table->unsignedBigInteger('game_id'); // El ID del juego en el que está
        $table->string('emotion'); // ej: 'happy', 'sad', 'surprised'
        $table->decimal('confidence', 5, 4); // Porcentaje de seguridad de la IA (ej: 0.9850)
        $table->timestamps();
    });
}
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('game_emotions');
    }
};
