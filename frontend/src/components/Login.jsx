import React, { useState } from 'react';
import { loginUser } from '../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(email, password);
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
            window.location.href = '/home';
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Login failed!');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;