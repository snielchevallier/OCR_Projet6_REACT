import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Connexion from './pages/Connexion'
import DashBoard from './pages/Dashboard'
import Profil from './pages/Profil'
import Error from './pages/Error'

import Header from './components/Header'
import Footer from './components/Footer' 

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    <Footer />
  </StrictMode>,
)
