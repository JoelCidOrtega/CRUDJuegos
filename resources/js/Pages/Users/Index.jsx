import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

export default function Index({ auth, users }) {
    const { delete: destroy } = useForm();
    const flash = usePage().props.flash;

    const handleDelete = (id) => {
        if (confirm('¿Estás seguro de que quieres eliminar a este usuario?')) {
            destroy(route('users.destroy', id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gestión de Usuarios</h2>}
        >
            <Head title="Usuarios" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {flash?.success && (
                        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                            {flash.success}
                        </div>
                    )}
                    {flash?.error && (
                        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                            {flash.error}
                        </div>
                    )}
                    
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-lg font-bold">Listado de Usuarios</h3>
                            <Link href={route('users.create')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Añadir Usuario
                            </Link>
                        </div>
                        
                        <div className="p-6 overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Roles</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-1">
                                                {user.roles.map(r => (
                                                    <span key={r.id} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                                                        {r.name}
                                                    </span>
                                                ))}
                                                {user.roles.length === 0 && <span className="text-gray-400">Sin roles</span>}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                                <Link href={route('users.edit', user.id)} className="text-yellow-600 hover:text-yellow-900">Editar</Link>
                                                {auth.user.id !== user.id && (
                                                    <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-900">Eliminar</button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
