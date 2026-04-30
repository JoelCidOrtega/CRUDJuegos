import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import FacialCapture from '@/Components/FacialCapture';

export default function Dashboard({ auth, games }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Plataforma de Juegos</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-8">
                        <div className="p-6 text-gray-900">
                            ¡Bienvenido, {auth.user.name}!
                        </div>
                    </div>

                    <div className="mb-8">
                        <FacialCapture />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Juegos Disponibles</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {games && games.length > 0 ? (
                            games.map((game) => (
                                <div key={game.id} className="bg-white overflow-hidden shadow-sm flex flex-col sm:rounded-lg border border-gray-200">
                                    <div className="p-6 flex-grow">
                                        <h4 className="text-xl font-bold mb-2">{game.title}</h4>
                                        <p className="text-gray-600 mb-4">{game.description || 'Sin descripción'}</p>
                                    </div>
                                    <div className="bg-gray-50 px-6 py-4 flex justify-end">
                                        <Link 
                                            href={route('games.play', game.id)}
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full transition duration-150 ease-in-out"
                                        >
                                            Jugar Ahora
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full bg-white p-6 shadow-sm rounded-lg text-center text-gray-500">
                                No hay juegos publicados en este momento. Vuelve más tarde.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
