<div class="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-4">
    <h2 class="text-2xl font-bold mb-4">Chat en Tiempo Real</h2>

    <div class="h-64 overflow-y-auto mb-4 border p-4 rounded bg-gray-50 flex flex-col gap-2">
        @foreach($messages as $msg)
            <div class="p-2 rounded max-w-sm {{ $msg->user_id === auth()->id() ? 'bg-blue-100 self-end text-right' : 'bg-white border self-start' }}">
                <span class="text-xs text-gray-500 font-bold block">{{ $msg->user->name ?? 'Usuario' }}</span>
                <span class="text-gray-800">{{ $msg->content }}</span>
            </div>
        @endforeach
    </div>

    <form wire:submit.prevent="sendMessage" class="flex gap-2">
        <input 
            type="text" 
            wire:model="message" 
            placeholder="Escribe un mensaje..."
            class="flex-1 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            required
        >
        <button 
            type="submit" 
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition-colors font-semibold"
        >
            Enviar
        </button>
    </form>
</div>
