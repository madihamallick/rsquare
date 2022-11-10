import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Dashboard from './Pages/Dashboard/Dashboard';

export default function Navigator() {
    const token = document.cookie.split('=')[1];
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        !token ? <SignUp /> : <Navigate to="/dashboard" replace />
                    }
                />
                <Route
                    path="/dashboard"
                    element={token ? <Dashboard /> : <Navigate to="/" replace />}
                />
                <Route path="/login" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}
