import React from 'react'
import './logueado.css'
import { Link } from 'react-router-dom'

function Logueado() {
    return (
        <div>

            <div className="container-3">
                <div className="navbar-3">
                    <img src="/images/logo.png" alt="logo" className="logo-3" />
                    <ul>
                        <li><a href="/">Cerrar Sesión</a></li>
                    </ul>
                </div>

                <br/><br/><br/><br/>

                <div className="contenedor">
                    <Link to="/iniciar-sesion/registrarse/logueado/publicaciones"><button className="boton b3"><a href="/">Agregar publicación</a></button></Link>
                </div>
            </div>

        </div>
    )
}

export default Logueado
