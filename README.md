# CRM de Juegos con Laravel y React (Inertia)

Este proyecto implementa una plataforma web completa de gestión y ejecución de juegos, actuando como un **CRM internamente** y como una **plataforma de juego externamente**. 

Cumple con todos los lineamientos establecidos para el módulo 0613, separando con claridad las responsabilidades, utilizando buenas prácticas y proporcionando una API funcional para interactuar con juegos cliente desarrollados en Three.js.

## Arquitectura y Tecnologías
- **Backend:** Laravel 11. Se encarga de la lógica de negocio, autenticación, autorización (roles), gestión de base de datos (Eloquent) y exposición de endpoints HTTP.
- **Frontend CRM & Plataforma:** React + Inertia.js (Laravel Breeze). Se utiliza para construir una interfaz moderna e interactiva sin las complicaciones de una SPA separada (Single Page Application).
- **Base de Datos:** SQLite (configurada de inicio para facilidad de prueba local, escalable a PostgreSQL fácilmente editando `.env`).
- **Autenticación:** Laravel session para el panel intermedio y Laravel Sanctum para proteger las llamadas a la API de los juegos.

## Características y Fases Implementadas

### Base de datos, ORM y Autenticación
El sistema tiene integrado **Laravel Breeze**.
Se han introducido **Roles de Usuario**, gestionados mediante una tabla intermedia `role_user` vinculando el modelo `User` con `Role`. 
Roles definidos:
- **Administrador:** Acceso completo.
- **Gestor:** Puede crear, modificar y publicar juegos.
- **Jugador:** Solo puede acceder al listado de juegos publicados y jugar.

*Para probar la plataforma se generaron usuarios con contraseñas por defecto (`password`) mediante `UserSeeder`.*

### Separación estricta entre Web y API
- Las rutas para el CRM y plataformas están definidas en `routes/web.php` y devuelven componentes de React mediante `Inertia`. Las rutas de administración están protegidas por un middleware propio `CheckRole`.
- La lógica que consume el juego Three.js (iniciar sesión, enviar puntaje) reside exclusivamente en `routes/api.php` y devuelve JSON puro. Están protegidas mediante `auth:sanctum`.

### Experiencia del CRM (Gestión de Juegos)
Los gestores pueden realizar un CRUD completo sobre el modelo `Game` (con los campos de título, descripción, `is_published`, URL, y creador).
- Se implementaron métodos para asegurar que el panel CRM solo reciba a usuarios autorizados usando el middleware creado en `App\Http\Middleware\CheckRole`.
- El CRM permite previsualizar el juego cargándolo de forma similar a como lo verá el jugador.

### Experiencia del Jugador (Plataforma y Sesiones)
El jugador inicia sesión y se dirige al "Dashboard", donde únicamente ve los juegos marcados como `is_published = true`. 
Al seleccionar "Jugar Ahora", el juego arranca su vista `PlayGame` cargando la URL (o el iframe configurado).

### Comunicación Cliente-Servidor (Three.js a Laravel)
Para conectar el juego (Three.js) con el backend, la vista inyecta parámetros como un mensaje PostMessage (con `user_id` y `game_id`). 
El juego cliente debe realizar llamadas `fetch` autenticadas al servidor (usando credenciales incluidas/sanctum):
1. `POST /api/game-sessions/start`: Registra en `game_sessions` una nueva partida y devuelve un ID de sesión.
2. `POST /api/game-sessions/{id}/end`: Cierra la sesión incluyendo métricas básicas (como `score`).

## Instalación y Arranque Local

Asegúrate de tener PHP 8.3+, Composer y Node.js instalados.

1. **Instalar dependencias de servidor:**
   ```bash
   composer install
   ```

2. **Instalar dependencias de cliente (React/Vite):**
   ```bash
   npm install
   ```

3. **Configurar el archivo de entorno (.env):**
   *(Por defecto el sistema está preconfigurado para SQLite, por lo que no es necesario instalar un motor de BD adicional para la evaluación local).*

4. **Migrar y popular la BD (Opcional, ya se ejecutó):**
   ```bash
   php artisan migrate:fresh --seed
   ```

5. **Levantar servicios en dos pestañas diferentes del terminal:**
   ```bash
   # Terminal 1: Inicia el Backend PHP
   php artisan serve
   
   # Terminal 2: Inicia Vite para compilar React
   npm run dev
   ```

Al entrar en `http://localhost:8000/` serás redirigido al portal. Usa las credenciales sembradas creadas dinámicamente (`admin@example.com`, `gestor@example.com`, o `jugador@example.com` - contraseña: `password`) para probar la plataforma como los diferentes roles.
