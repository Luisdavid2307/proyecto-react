import React from 'react'
import { BrowserRouter, Routes, Route }  from 'react-router-dom'
import Inicio from './Inicio'
import Login from './Login'
import Register from './Register'
import Logueado from './Logueado'
import Publicacion from './Publicacion'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>} ></Route>
        <Route path='/iniciar-sesion' element={<Login />} ></Route>
        <Route path='/iniciar-sesion/registrarse' element={<Register />} ></Route>
        <Route path='/iniciar-sesion/registrarse/logueado' element={<Logueado />} ></Route>
        <Route path='/iniciar-sesion/registrarse/logueado/publicaciones' element={<Publicacion />} ></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App

