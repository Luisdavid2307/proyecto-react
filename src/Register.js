import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css'

function Register() {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [warnings, setWarnings] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Valida los datos
    if (formData.name.length < 6) {
      setWarnings('El nombre debe tener al menos 6 caracteres');
      return;
    }

    if (!isValidEmail(formData.email)) {
      setWarnings('El correo electrónico no es válido');
      return;
    }

    if (formData.password.length < 8) {
      setWarnings('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    // Almacenar los datos en el LocalStorage
    localStorage.setItem('userData', JSON.stringify(formData));

    // Redirigir a la página de inicio de sesión después del registro
    navigate('/iniciar-sesion');
  };

  // Función para validar el formato del correo electrónico
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
        <div className="container-2">
                <div className="navbar-2">
                    <img src="/images/logo.png" alt="logo" class="logo-2" />
                    <ul>
                        <li><a href="/">Inicio</a></li>
                    </ul>
                </div>

                <div className="cuerpo-form"></div>
                <div className="container-form sign-up">
                    <div className="welcome-back">
                        <div className="message">
                            <h2>Bienvenido</h2>
                            <p>Si ya tienes una cuenta por favor inicia sesión aquí</p>
                            <a href='/iniciar-sesion'><button className="sign-up-btn">Iniciar Sesión</button></a>
                        </div>
                    </div>
                    <form className="formulario" id="form" onSubmit={handleFormSubmit}>
                        <h2 className="create-account">Crear una cuenta</h2>
                        <div className="iconos">
                            <div className="border-icon">
                                <i className="bx bxl-facebook" ></i>
                            </div>
                            <div className="border-icon">
                                <i className="bx bxl-google" ></i>
                            </div>
                            <div className="border-icon">
                                <i className="bx bxl-github"></i>
                            </div>
                        </div>
                        <p className="cuenta-gratis">Crear una cuenta gratis</p>
                        <input type="text" id="name" placeholder="Nombre de usuario" value={formData.name} onChange={handleInputChange} />
                        <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                        <input type="password" id="password" placeholder="Contraseña" value={formData.password} onChange={handleInputChange} />
                        <button type="submit">Registrarse</button>
                        <p className="warnings" id="warnings">{warnings}</p>
                    </form>
                </div>
        </div>
    </div>
  )
}

export default Register
