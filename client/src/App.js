import IniciarSesion from "./pages/iniciarSesion";
import PaginaPrincipal from "./pages/paginaPrincipal";
import Contactanos from "./pages/contactanos";
import QuienesSomos from "./pages/quienesSomos";
import Animales from "./pages/animales";
import Formulario from "./pages/formulario";

import Footer from "./components/Footer";
import Popup from "./components/Popup";

import './App.css';
import './styles/App.css';
import './styles/estiloContactanos.css';
import './styles/estiloTabla.css';
import './styles/estiloMenu.css';
import './styles/sobrenosotros.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Menuar from './components/script';

function App() {
  const [botonPopup, setBotonPopup] = useState('false');
  const nav = document.querySelector('.nav');

  window.addEventListener('scroll',()=>{
      nav.classList.toggle('active',window.scrollY>0)
  })
  return (
    <div>
      <Router>
        <div onLoad={() => setBotonPopup(false)}>
          <header>
            <nav className="nav">
              <div className="logo">
                <img src="imagenes/logo.png" alt="Logo Página" class="Pequenio" />
              </div>
              <ul className="menu">
                <li><a href="/">Inicio</a></li>
                <li><a href="quienesSomos">Quiénes Somos</a></li>
                <li><a href="contactanos">Contáctanos</a></li>
                <li><a href="animales">Animales</a></li>
                <li><a href="formulario">Formulario</a></li>
                <li><a onClick={() => setBotonPopup(true)}>Iniciar Sesión</a></li>
              </ul>
            </nav>
          </header>
        </div>
        <Routes>
          <Route exact path="/" element={<PaginaPrincipal />} />
          <Route path="/Contactanos" element={<Contactanos />} />
          <Route path="/IniciarSesion" element={<IniciarSesion />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/Animales" element={<Animales />} />
          <Route path="/Formulario" element={<Formulario/>}/>
        </Routes>
        <Footer />
        <Popup trigger={botonPopup} setTrigger={setBotonPopup} />
      </Router>
    </div>
  );
}

export default App;