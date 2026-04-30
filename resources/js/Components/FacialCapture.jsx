import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

export default function FacialCapture() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [fotoRegistro, setFotoRegistro] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Iniciar WebRTC
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch(err => {
                console.error("Error al acceder a la cámara:", err);
                setError("Por favor, permite el acceso a la cámara.");
            });

        return () => {
             // Limpiar el stream al desmontar
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const captureAndVerify = () => {
        if (!fotoRegistro) {
            setError("Por favor, sube tu foto de registro primero.");
            return;
        }

        const video = videoRef.current;
        const canvas = canvasRef.current;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob) => {
            const formData = new FormData();
            formData.append('foto_registro', fotoRegistro);
            formData.append('foto_webcam', new File([blob], 'webcam.jpg', { type: 'image/jpeg' }));

            setLoading(true);
            setError(null);
            setResultado(null);

            axios.post('/facial-verify', formData)
                .then(response => {
                    setResultado(response.data);
                })
                .catch(err => {
                    console.error(err);
                    setError("Falló la verificación. Verifica que el microservicio esté activo.");
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 'image/jpeg');
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow mt-4">
            <h2 className="text-xl font-bold mb-4">Verificación Facial con IA</h2>
            
            {error && (
                <div className="bg-red-100 text-red-700 p-2 mb-4 rounded border-l-4 border-red-500">
                    {error}
                </div>
            )}

            {resultado && (
                <div className="bg-blue-50 p-4 mb-4 rounded border border-blue-200">
                    <h3 className="font-semibold text-blue-800">Resultado de la IA:</h3>
                    <p><strong>¿Misma persona?:</strong> {resultado.verified ? '✅ SÍ' : '❌ NO'}</p>
                    <p><strong>Distancia:</strong> {resultado.distance?.toFixed(2)}</p>
                </div>
            )}

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">1. Sube tu foto (DNI o base)</label>
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => setFotoRegistro(e.target.files[0])}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">2. Cámara Webcam</label>
                <video ref={videoRef} autoPlay playsInline muted className="w-full rounded border" />
                <canvas ref={canvasRef} style={{ display: 'none' }} />
            </div>

            <button 
                onClick={captureAndVerify}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
                {loading ? 'Verificando...' : 'Capturar y Verificar'}
            </button>
        </div>
    );
}
