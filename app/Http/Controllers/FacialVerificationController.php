<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class FacialVerificationController extends Controller
{
    public function verify(Request $request)
    {
        $request->validate([
            'foto_registro' => 'required|image',
            'foto_webcam' => 'required|image'
        ]);

        try {
            $url = env('FACIAL_SERVICE_URL', 'http://localhost:5000/verify');
            
            // Enviar imágenes mediante Http::attach() al microservicio Python
            $response = Http::attach(
                'img1', file_get_contents($request->file('foto_registro')->path()), $request->file('foto_registro')->getClientOriginalName()
            )->attach(
                'img2', file_get_contents($request->file('foto_webcam')->path()), $request->file('foto_webcam')->getClientOriginalName()
            )->post($url);

            if ($response->successful()) {
                return response()->json($response->json());
            }

            return response()->json(['error' => 'Error en el microservicio', 'details' => $response->body()], 500);

        } catch (\Exception $e) {
            Log::error('Error connecting to facial microservice: ' . $e->getMessage());
            return response()->json(['error' => 'No se pudo conectar al microservicio facial'], 500);
        }
    }
}
