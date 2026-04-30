import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

// Usamos Face API puro a través de CDN genérico si no está en NPM
export default function EmotionTracker({ gameId }) {
    const videoRef = useRef(null);
    const [status, setStatus] = useState('Cargando modelos...');

    useEffect(() => {
        // Cargar script dinámicamente
        const loadLib = async () => {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js";
            script.async = true;
            document.body.appendChild(script);
            
            script.onload = async () => {
                try {
                    // Cargar modelos remotos
                    const MODEL_URL = 'https://justadudewhohacks.github.io/face-api.js/models';
                    await window.faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
                    await window.faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
                    
                    setStatus('Modelos cargados. Iniciando cámara...');
                    startVideo();
                } catch(e) {
                    console.error(e);
                    setStatus('Error cargando modelos IA');
                }
            };
        };
        
        loadLib();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(t => t.stop());
            }
        };
    }, []);

    const startVideo = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch(err => setStatus('Cámara bloqueada'));
    };

    const handleVideoPlay = () => {
        setStatus('Detectando emociones en tiempo real...');
        
        setInterval(async () => {
            if (videoRef.current && window.faceapi) {
                const detections = await window.faceapi.detectSingleFace(
                    videoRef.current, 
                    new window.faceapi.TinyFaceDetectorOptions()
                ).withFaceExpressions();

                if (detections) {
                    // Obtener la emoción dominante
                    const exp = detections.expressions;
                    const maxEmotion = Object.keys(exp).reduce((a, b) => exp[a] > exp[b] ? a : b);
                    
                    console.log("Emoción detectada:", maxEmotion);
                    
                    // Mandar al backend
                    axios.post('/game-session/emotion', {
                        emotion: maxEmotion,
                        game_id: gameId
                    }).catch(console.error);
                }
            }
        }, 5000); // Muestra cada 5 segundos
    };

    return (
        <div className="text-xs text-gray-500 text-center mt-2 p-2 border rounded bg-white shadow-sm inline-block">
            <p><strong>Rastreador de Emociones:</strong> {status}</p>
            <video 
                ref={videoRef} 
                onPlay={handleVideoPlay}
                autoPlay 
                muted 
                className="hidden" // El requerimiento pide procesar local por privacidad sin enviar imágenes. La cámara se enciende pero podemos ocultar el vídeo.
                width="320" height="240"
            />
        </div>
    );
}
