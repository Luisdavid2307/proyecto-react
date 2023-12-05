import React from 'react'
import { Link } from 'react-router-dom'
import './inicio.css'

function inicio() {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <img src="images/logo.png" alt="logo" class="logo" />
        </div>

        <div className="contenedor-mensaje">
          <div className="mensaje">
            <p>¡Bienvenido a nuestra plataforma de publicaciones científicas! Aquí encontrarás un vasto repositorio de conocimiento, donde la investigación y el descubrimiento convergen. Explora los avances más recientes en diversas disciplinas. Para registrarte o iniciar sesión, dale click al botón.</p>
            <Link to="/iniciar-sesion"><button>Iniciar Sesión</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default inicio
