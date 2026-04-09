import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Create({ auth, roles }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        roles: [],
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('users.store'));
    };

    const handleRoleChange = (e, roleId) => {
        if (e.target.checked) {
            setData('roles', [...data.roles, roleId]);
        } else {
            setData('roles', data.roles.filter(id => id !== roleId));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Añadir Usuario</h2>}
        >
            <Head title="Crear Usuario" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <form onSubmit={submit} className="max-w-xl">
                            <div>
                                <InputLabel htmlFor="name" value="Nombre" />
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="email" value="Email" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="password" value="Contraseña" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="password_confirmation" value="Confirmar Contraseña" />
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                />
                            </div>

                            <div className="mt-6">
                                <InputLabel value="Roles del Usuario" />
                                <div className="mt-2 space-y-2">
                                    {roles.map(role => (
                                        <div key={role.id} className="flex items-center">
                                            <input
                                                id={`role_${role.id}`}
                                                type="checkbox"
                                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                                                onChange={(e) => handleRoleChange(e, role.id)}
                                            />
                                            <label htmlFor={`role_${role.id}`} className="ml-2 text-sm text-gray-600 capitalize">
                                                {role.name}
                                                <span className="text-xs text-gray-400 ml-2 block sm:inline">({role.description})</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <InputError message={errors.roles} className="mt-2" />
                            </div>

                            <div className="flex items-center justify-end mt-6">
                                <Link href={route('users.index')} className="text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none mr-4">
                                    Cancelar
                                </Link>
                                <PrimaryButton className="ml-4" disabled={processing}>
                                    Guardar
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
