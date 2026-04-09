<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = \App\Models\Role::where('name', 'administrador')->first();
        $gestorRole = \App\Models\Role::where('name', 'gestor')->first();
        $jugadorRole = \App\Models\Role::where('name', 'jugador')->first();

        $admin = \App\Models\User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
        ]);
        $admin->roles()->attach($adminRole);

        $gestor = \App\Models\User::factory()->create([
            'name' => 'Gestor User',
            'email' => 'gestor@example.com',
        ]);
        $gestor->roles()->attach($gestorRole);

        $jugador = \App\Models\User::factory()->create([
            'name' => 'Jugador User',
            'email' => 'jugador@example.com',
        ]);
        $jugador->roles()->attach($jugadorRole);
    }
}
