import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default function EmotionTracker({ gameId }) {
    const videoRef = useRef(null);
    const intervalRef = useRef(null);
    const [status, setStatus] = useState('Cargando modelos...');
    const [currentEmotion, setCurrentEmotion] = useState('Esperando rostro...'); // Añadimos esto para que lo veas en la UI

    useEffect(() => {
        const loadLib = async () => {
            if (!document.getElementById('face-api-script')) {
                const script = document.createElement("script");
                script.id = "face-api-script";
                script.src = "https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js";
                script.async = true;
                document.body.appendChild(script);

                script.onload = initModels;
            } else {
                initModels();
            }
        };

        const initModels = async () => {
            try {
                const MODEL_URL = 'https://justadudewhohacks.github.io/face-api.js/models';
                await window.faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
                await window.faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);

                setStatus('Modelos cargados. Pidiendo permisos de cámara...');
                startVideo();
            } catch(e) {
                console.error("Error cargando modelos (F12):", e);
                setStatus('Error cargando modelos IA');
            }
        };

        loadLib();

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
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
                    setStatus('Cámara conectada. Procesando...');
                }
            })
            .catch(err => {
                console.error("Error al acceder a la cámara:", err);
                setStatus('Cámara bloqueada o sin permisos');
            });
    };

    const handleVideoPlay = () => {
        setStatus('Detectando emociones en tiempo real... 👁️');

        intervalRef.current = setInterval(async () => {
            if (videoRef.current && window.faceapi) {
                const detections = await window.faceapi.detectSingleFace(
                    videoRef.current,
                    new window.faceapi.TinyFaceDetectorOptions()
                ).withFaceExpressions();

                if (detections) {
                    const exp = detections.expressions;
                    const maxEmotion = Object.keys(exp).reduce((a, b) => exp[a] > exp[b] ? a : b);
                    const confidence = exp[maxEmotion];

                    if (confidence > 0.60) {
                        // Lo mostramos en la interfaz para que puedas hacer pruebas
                        setCurrentEmotion(`${maxEmotion} (${(confidence * 100).toFixed(0)}%)`);

                        axios.post('/api/game-emotions', {
                            emotion: maxEmotion,
                            confidence: confidence,
                            game_id: gameId
                        }).catch(err => console.error("Error al guardar en BD:", err));
                    }
                } else {
                    setCurrentEmotion("No detecto ningún rostro claramente");
                }
            }
        }, 3000); // Lo bajamos a 3 segundos temporalmente para depurar más rápido
    };

    return (
        <div className="text-sm text-gray-700 text-center mt-4 p-4 border-2 border-indigo-200 rounded-lg bg-white shadow-md inline-block">
            <p className="mb-2"><strong>Estado:</strong> {status}</p>
            <p className="mb-4 text-lg text-indigo-600 font-bold uppercase">{currentEmotion}</p>

            {/* Hacemos el video visible temporalmente para confirmar hardware */}
            <video
                ref={videoRef}
                onPlay={handleVideoPlay}
                autoPlay
                muted
                className="mx-auto rounded border shadow-inner"
                width="200" height="150"
            />
        </div>
    );
}
