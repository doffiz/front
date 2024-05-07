'use client';
import { useState, FormEvent, ChangeEvent } from 'react';
import { LuEye, LuEyeOff } from "react-icons/lu";

interface LoginFormProps {
    onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLoginSubmit = (e: FormEvent) => {
        e.preventDefault();
        onLoginSuccess();

    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col w-full text-black max-w-md rounded-lg bg-slate-200 mx-auto p-16 space-y-2">
            <form onSubmit={handleLoginSubmit} className="flex flex-col space-y-4">
                <label htmlFor="username" className="sr-only">Epost</label>
                <input
                    type="username"
                    placeholder="Brukernavn"
                    value={username}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                    className="p-2 border text-sm border-gray-300 rounded w-full"
                />
                <div className="relative">
                    <label htmlFor="password" className="sr-only">Passord</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Passord"
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        className="p-2 text-sm border border-gray-300 rounded w-full pr-10"
                    />
                    <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        {showPassword ? <LuEyeOff /> : <LuEye />}
                    </button>
                </div>
                <button type="submit" className="p-2 bg-slate-400 text-xs text-white rounded hover:bg-slate-600 transition-all duration-200 ease-in-out">Logg inn</button>
            </form>
            <div className="flex items-center justify-center my-4">
                <hr className="flex-grow border-t border-slate-800" />
                <span className="px-2 text-slate-800 text-xs">ELLER</span>
                <hr className="flex-grow border-t border-slate-800" />
            </div>
            <button onClick={() => {}} className="p-2 bg-slate-400 text-xs text-white rounded hover:bg-slate-600 transition-all duration-200 ease-in-out">Fortsett med Google</button>
        </div>
    );
};

export default LoginForm;