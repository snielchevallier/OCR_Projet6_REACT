import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'

import ProtectedRoute from "./layouts/ProtectedRoute";

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Error from './pages/Error'

const App = () => {
    return (
        
            <Router>
                <Routes>
                    <Route path="/" element={
                        <ProtectedRoute>
                            <MainLayout>
                                <Dashboard />
                            </MainLayout>
                        </ProtectedRoute>
                    } />
                    <Route path="/login" element={
                        <AuthLayout><Login /></AuthLayout>
                    } />
                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <MainLayout>
                                <Dashboard />
                            </MainLayout>
                        </ProtectedRoute>
                    } />
                    <Route path="/profile" element={
                        <ProtectedRoute>
                            <MainLayout>
                                <Profile />
                            </MainLayout>
                        </ProtectedRoute>
                    } />
                    <Route path="*" element={
                        <MainLayout><Error /></MainLayout>
                    } />
                </Routes>
            </Router>
    )
}
export default App