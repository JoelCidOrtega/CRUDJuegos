import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ auth, games, flash }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('¿Estás seguro de que quieres eliminar este juego?')) {
            destroy(route('games.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gestión de Juegos (CRM)</h2>}
        >
            <Head title="Juegos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {flash?.success && (
                        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                            <span className="block sm:inline">{flash.success}</span>
                        </div>
                    )}
                    
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-lg font-bold">Listado de Juegos</h3>
                            <Link href={route('games.create')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Añadir Juego
                            </Link>
                        </div>
                        
                        <div className="p-6 overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Creador</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {games.map((game) => (
                                        <tr key={game.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{game.title}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {game.is_published ? (
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Publicado</span>
                                                ) : (
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Oculto</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {game.creator?.name || 'Desconocido'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                                <Link href={route('games.show', game.id)} className="text-indigo-600 hover:text-indigo-900">Ver</Link>
                                                <Link href={route('games.edit', game.id)} className="text-yellow-600 hover:text-yellow-900">Editar</Link>
                                                <button onClick={() => handleDelete(game.id)} className="text-red-600 hover:text-red-900">Eliminar</button>
                                            </td>
                                        </tr>
                                    ))}
                                    {games.length === 0 && (
                                        <tr>
                                            <td colSpan="4" className="px-6 py-4 text-center text-gray-500 text-sm">
                                                No hay juegos registrados aún.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
