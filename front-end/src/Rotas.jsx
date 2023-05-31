import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthProvider from './context/authContext'
import NavBar from './components/main/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import Registro from './pages/Registro'

const Rotas = () => {
  return (
    <BrowserRouter>
        <AuthProvider>
            <NavBar/>
            <Routes>
                <Route path='/'  element={<Home />}/>
                <Route path='/login'  element={<Login />}/>
                <Route path='/registro'  element={<Registro />}/>
            </Routes>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default Rotas