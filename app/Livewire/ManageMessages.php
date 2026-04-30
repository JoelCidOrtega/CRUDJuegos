<?php

namespace App\Livewire;

use Livewire\Component;
use App\Models\Message;
use Illuminate\Support\Facades\Auth;

class ManageMessages extends Component
{
    public $message = '';

    public function getListeners()
    {
        return [
            "echo:chat,MessageSend" => 'refreshMessages',
        ];
    }

    public function sendMessage()
    {
        $this->validate([
            'message' => 'required|string|max:1000',
        ]);

        $msg = Message::create([
            'user_id' => Auth::id(),
            'content' => $this->message,
        ]);

        broadcast(new \App\Events\MessageSend($msg))->toOthers();

        $this->message = '';
    }

    public function refreshMessages()
    {
        // Se llama dinámicamente cada vez que se escucha el evento Echo
    }

    public function render()
    {
        // Optimización requerida por el PDF
        $messages = Message::with('user')->get();

        return view('livewire.manage-messages', [
            'messages' => $messages
        ]);
    }
}
