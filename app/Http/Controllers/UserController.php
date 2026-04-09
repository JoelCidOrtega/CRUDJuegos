<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('roles')->latest()->get();
        return Inertia::render('Users/Index', [
            'users' => $users
        ]);
    }

    public function create()
    {
        return Inertia::render('Users/Create', [
            'roles' => Role::all()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'roles' => 'required|array',
            'roles.*' => 'exists:roles,id'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $user->roles()->sync($request->roles);

        return redirect()->route('users.index')->with('success', 'Usuario creado correctamente.');
    }

    public function edit(User $user)
    {
        return Inertia::render('Users/Edit', [
            'user' => $user->load('roles'),
            'roles' => Role::all()
        ]);
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class.',id,'.$user->id,
            'password' => ['nullable', 'confirmed', Rules\Password::defaults()],
            'roles' => 'required|array',
            'roles.*' => 'exists:roles,id'
        ]);

        $data = [
            'name' => $request->name,
            'email' => $request->email,
        ];
        
        if ($request->filled('password')) {
            $data['password'] = Hash::make($request->password);
        }

        $user->update($data);
        $user->roles()->sync($request->roles);

        return redirect()->route('users.index')->with('success', 'Usuario actualizado correctamente.');
    }

    public function destroy(User $user)
    {
        if ($user->id === auth()->id()) {
            return redirect()->back()->with('error', 'No puedes eliminarte a ti mismo.');
        }

        $user->delete();
        return redirect()->route('users.index')->with('success', 'Usuario eliminado.');
    }
}
