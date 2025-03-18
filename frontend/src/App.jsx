import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';

const App = () => {
    const token = localStorage.getItem('token');

    return (
        <Router>
            <Routes>
                <Route path="/home" element={token ? <Home /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/add" element={token ? <AddPost /> : <Navigate to="/login" />} />
                <Route path="/edit/:id" element={token ? <EditPost /> : <Navigate to="/login" />} />
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </Router>
    );
};

export default App;