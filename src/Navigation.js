import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Dashboard from './Pages/Dashboard/Dashboard';

export default function Navigator() {
    const token = document.cookie.split('=')[1];
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<SignIn/>} />
                {token? <Route path="/dashboard" element={<Dashboard />} /> : <Route path="/login" element={<SignIn />} />}
            </Routes>
        </BrowserRouter>
    );
}
