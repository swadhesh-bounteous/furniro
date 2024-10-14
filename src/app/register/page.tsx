"use client";
import React, { useState } from 'react';
import { useRegister } from '@/lib/features/auth/useAuth';
 
const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { mutate: register } = useRegister();
 
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if ( email && password) {
            register({ email, password });
        } else {
            console.log("Please fill in all the fields");
        }
    };
 
    return (
        <form onSubmit={handleRegister}>
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
            <button type="submit">Register</button>
        </form>
    );
};
 
export default Register;