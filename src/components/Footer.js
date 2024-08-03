import React from 'react';
import './Footer.css'; // Asegúrate de que este archivo CSS esté correctamente vinculado

// Asegúrate de tener los íconos necesarios importados o disponibles en el proyecto
import logo from "./img/logo.png"; // Importa la imagen aquí
import instagramIcon from './img/insta.png'; // Reemplaza con la ruta real del ícono de Instagram
import linkedinIcon from './img/linke.png'; // Reemplaza con la ruta real del ícono de LinkedIn

function Footer() {
  return (
    <footer className="App-footer">
      <div className="Footer-container">
        <div className="Footer-column">
          <img src={logo} alt="Logo" className="Footer-logo" />
          <div className="Footer-social">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="Footer-social-icon" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="Footer-social-icon" />
            </a>
          </div>
        </div>
        <div className="Footer-column">
          <h2>Correo electrónico</h2>
          <p>Beatrizdominguez@gmail.com</p>
        </div>
        <div className="Footer-column">
          <h2>Whatsapp</h2>
          <p>625 666 765</p>
        </div>
        <div className="Footer-column">
          <h2>Dirección</h2>
          <p>Fuenlabrada, Calle Miguel Unamuno 1</p>
        </div>
      </div>
      <div className="Footer-copyright">
        <p>&copy; 2024 Alberca Design. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;