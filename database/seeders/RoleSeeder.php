<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            ['name' => 'administrador', 'description' => 'Administrador general del sistema'],
            ['name' => 'gestor', 'description' => 'Gestor de los juegos del CRM'],
            ['name' => 'jugador', 'description' => 'Usuario jugador normal de la plataforma'],
        ];

        foreach ($roles as $role) {
            \App\Models\Role::create($role);
        }
    }
}
