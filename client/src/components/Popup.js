import React from 'react';
import "./Popup.css";
import { useState, useEffect } from 'react';


function Popup(props) {
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');

    const handleSubmit = (event) => {
        event.prevenrDefault() 
        console.log('This is Submit') 
    }
    return (props.trigger) ? (
        <div className='popup'>
            <div className='inner-popup'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
                {props.children}
                <div className='mainPopup'>
                    <div className='contenidoPopup grid'>
                    <h1>Iniciar Sesión</h1>
                        <button class="cuentas" id="google">Iniciar sesión con Google</button><br/>
                        <button class="cuentas" id="facebook">Iniciar sesión con Facebook</button><br/>
                        
                        <div className='formulario'>
                            <label for="correo">Correo: </label>
                            <input type="text" class="inputFormulario login" id="nombre" name="nombre" onChange={(e) => {
                                setCorreo(e.target.value)
                            }} />
                            <label for="contraseña">Contraseña:</label>
                            <input type="password" class="inputFormulario login" id="contraseña" name="contraseña" onChange={(e) => {
                                setContrasenia(e.target.value)
                            }} />
                            <br/>
                            <button>Iniciar Sesión</button>
                        </div>
                        <p id="regis">¿No tienes una cuenta? ¡Crea una <a href='IniciarSesion'>aquí</a>!</p>
                    </div>
                    
                    
                </div>
            </div>

        </div>
    ) : "";
}

export default Popup;