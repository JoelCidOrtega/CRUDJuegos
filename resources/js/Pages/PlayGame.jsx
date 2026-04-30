import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useRef } from 'react';
import EmotionTracker from '@/Components/EmotionTracker';

export default function PlayGame({ auth, game }) {
    const iframeRef = useRef(null);

    const handleIframeLoad = () => {
        if (iframeRef.current && iframeRef.current.contentWindow) {
            iframeRef.current.contentWindow.postMessage({
                type: 'AUTH_DATA',
                user: auth.user,
                gameId: game.id
            }, '*');
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Jugando: {game.title}</h2>
                    <Link href={route('dashboard')} className="text-sm text-indigo-600 hover:text-indigo-900">
                        Volver al Dashboard
                    </Link>
                </div>
            }
        >
            <Head title={`Jugando ${game.title}`} />

            {/* Aquí llamas al componente que hace la magia de forma silenciosa */}
            <EmotionTracker gameId={game.id} />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-black rounded-lg shadow-xl overflow-hidden relative" style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}>
                        {game.url ? (
                            <iframe
                                ref={iframeRef}
                                src={game.url}
                                className="w-full h-full border-0"
                                title={game.title}
                                onLoad={handleIframeLoad}
                                allowFullScreen
                                sandbox="allow-scripts allow-same-origin"
                            ></iframe>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-white">
                                <p className="text-xl mb-4">El juego no está disponible actualmente.</p>
                                <p className="opacity-50 text-sm">Falta la URL del juego.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
