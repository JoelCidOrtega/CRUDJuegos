import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ auth, game }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Previsualizar Juego: {game.title}</h2>}
        >
            <Head title={`Previsualización - ${game.title}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 border-b border-gray-200 flex justify-between">
                            <div>
                                <h3 className="font-bold text-lg mb-2">{game.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{game.description}</p>
                                <p className="text-sm font-semibold">
                                    Estado: {game.is_published ? (
                                        <span className="text-green-600">Publicado</span>
                                    ) : (
                                        <span className="text-red-600">Oculto</span>
                                    )}
                                </p>
                            </div>
                            <div>
                                <Link href={route('games.index')} className="text-indigo-600 hover:text-indigo-900 mr-4">Volver al Listado</Link>
                                <Link href={route('games.edit', game.id)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                                    Editar
                                </Link>
                            </div>
                        </div>

                        <div className="p-6 bg-gray-100 flex justify-center flex-col items-center min-h-[500px]">
                            {/* Aquí se simula la incrustación del juego */}
                            {game.url ? (
                                <div className="w-full max-w-4xl h-[600px] border-4 border-gray-800 rounded-lg overflow-hidden relative">
                                    <div className="absolute top-0 left-0 w-full bg-gray-800 text-white text-xs px-2 py-1 flex justify-between">
                                        <span>Modo Previsualización CRM</span>
                                        <span>Game ID: {game.id}</span>
                                    </div>
                                    <iframe 
                                        src={game.url} 
                                        className="w-full h-full pt-6 bg-white" 
                                        title={game.title}
                                        sandbox="allow-scripts allow-same-origin"
                                    ></iframe>
                                </div>
                            ) : (
                                <div className="text-center p-12 bg-white rounded-lg shadow border border-dashed border-gray-300">
                                    <p className="text-gray-500 mb-2">Este juego no tiene una URL configurada.</p>
                                    <p className="text-sm text-gray-400">Edita el juego para añadir la ruta del iframe o Canvas.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
