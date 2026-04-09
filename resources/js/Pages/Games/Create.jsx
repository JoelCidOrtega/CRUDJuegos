import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        url: '',
        is_published: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('games.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Añadir Juego</h2>}
        >
            <Head title="Crear Juego" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <form onSubmit={submit} className="max-w-xl">
                            <div>
                                <InputLabel htmlFor="title" value="Título" />
                                <TextInput
                                    id="title"
                                    type="text"
                                    name="title"
                                    value={data.title}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('title', e.target.value)}
                                />
                                <InputError message={errors.title} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="description" value="Descripción" />
                                <textarea
                                    id="description"
                                    name="description"
                                    value={data.description}
                                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                    rows="4"
                                    onChange={(e) => setData('description', e.target.value)}
                                />
                                <InputError message={errors.description} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="url" value="URL del Juego (o ruta relativa)" />
                                <TextInput
                                    id="url"
                                    type="text"
                                    name="url"
                                    value={data.url}
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('url', e.target.value)}
                                    placeholder="ej: /games/mi-juego/index.html o https://ejemplo.com"
                                />
                                <InputError message={errors.url} className="mt-2" />
                            </div>

                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="is_published"
                                        checked={data.is_published}
                                        onChange={(e) => setData('is_published', e.target.checked)}
                                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-600">Publicar para los jugadores</span>
                                </label>
                                <InputError message={errors.is_published} className="mt-2" />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <Link href={route('games.index')} className="text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none mr-4">
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
