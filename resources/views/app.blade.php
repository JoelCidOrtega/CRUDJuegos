<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
        @livewireStyles
    </head>
    <body class="font-sans antialiased">
        @inertia
        
        @auth
        <div style="position: fixed; bottom: 20px; right: 20px; z-index: 50; width: 380px;">
            {{-- Panel del chat --}}
            <div id="chat-panel" style="max-height: 420px; overflow-y: auto; margin-bottom: 10px; transition: all 0.3s ease;">
                @livewire('manage-messages')
            </div>

            {{-- Botón flotante para mostrar/ocultar --}}
            <div style="display: flex; justify-content: flex-end;">
                <button
                    id="chat-toggle-btn"
                    onclick="toggleChat()"
                    style="
                        background: #2563eb;
                        color: white;
                        border: none;
                        border-radius: 9999px;
                        padding: 10px 20px;
                        font-size: 14px;
                        font-weight: 600;
                        cursor: pointer;
                        box-shadow: 0 4px 12px rgba(37,99,235,0.4);
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        transition: background 0.2s;
                    "
                    onmouseover="this.style.background='#1d4ed8'"
                    onmouseout="this.style.background='#2563eb'"
                >
                    <span id="chat-toggle-icon">💬</span>
                    <span id="chat-toggle-label">Ocultar chat</span>
                </button>
            </div>
        </div>

        <script>
            let chatVisible = true;
            function toggleChat() {
                const panel = document.getElementById('chat-panel');
                const icon  = document.getElementById('chat-toggle-icon');
                const label = document.getElementById('chat-toggle-label');
                chatVisible = !chatVisible;
                if (chatVisible) {
                    panel.style.display = 'block';
                    icon.textContent  = '💬';
                    label.textContent = 'Ocultar chat';
                } else {
                    panel.style.display = 'none';
                    icon.textContent  = '💬';
                    label.textContent = 'Mostrar chat';
                }
            }
        </script>
        @endauth

        @livewireScripts
    </body>
</html>
