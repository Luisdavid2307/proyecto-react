import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './login.css'


function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (storedUserData && storedUserData.name === username && storedUserData.password === password) {
            setLoginError('');
            navigate('/iniciar-sesion/registrarse/logueado');
        } else {
            setLoginError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div>
            <div className="container-2">
                <div className="navbar-2">
                    <img src="images/logo.png" alt="logo" class="logo-2" />
                    <ul>
                        <li><a href="/">Inicio</a></li>
                    </ul>
                </div>

                <div className="container-form sign-in">
                    <div className="formulario" id="form">
                        <h2 className="create-account">Iniciar Sesión</h2>
                        <div className="iconos">
                            <div className="border-icon">
                                <i className='bx bxl-facebook' ></i>
                            </div>
                            <div className="border-icon">
                                <i className='bx bxl-google' ></i>
                            </div>
                            <div className="border-icon">
                                <i className='bx bxl-github'></i>
                            </div>
                        </div>
                        <p className="cuenta-gratis">¿Aún no tienes cuenta?</p>
                        <input type="text" id="username" placeholder="Nombre de usuario" value={username} onChange={handleUsernameChange} />
                        <input type="password" id="pass" placeholder="Contraseña"  value={password}  onChange={handlePasswordChange} />
                        <button id="submit" onClick={handleLogin}>Iniciar Sesión</button> <br/> <br/> 
                        {loginError && <p className="error-message">{loginError}</p>}
                    </div>
                    <div className="welcome-back">
                        <div className="message">
                            <h2>Bienvenido de nuevo</h2>
                            <p>Si aún no tienes una cuenta por favor registrate aquí</p>
                            <Link to="registrarse"><button className="sign-in-btn">Registrarse</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Login
