import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import MainLayout from './components/MainLayout'
import AuthLayout from './components/AuthLayout'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Error from './pages/Error'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <MainLayout>
                        <Dashboard />
                    </MainLayout>
                } />
                <Route path="/login" element={
                    <AuthLayout><Login /></AuthLayout>
                } />
                <Route path="/dashboard" element={
                    <MainLayout>
                        <Dashboard />
                    </MainLayout>
                } />
                <Route path="/profile" element={
                    <MainLayout>
                        <Profile />
                    </MainLayout>
                } />
                <Route path="*" element={
                    <AuthLayout><Error /></AuthLayout>
                } />
            </Routes>
        </Router>
    )
}
export default App