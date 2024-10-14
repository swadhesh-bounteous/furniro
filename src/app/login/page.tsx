"use client";
import React, { useState } from 'react';
import { useLogin } from '@/lib/features/auth/useAuth';
 
const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { mutate: login } = useLogin();
 
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password) {
            login({ email, password });
        } else {
            console.log("Please enter both email and password");
        }
    };
 
    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
};
 
export default Login;