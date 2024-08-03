import React, { useEffect, useRef } from "react";
import "./Header.css"; // Importa el archivo de estilos
import logo2 from "./img/logow.png"; // Importa la imagen aquí

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerElement = headerRef.current;

    // Asegúrate de que el header sea visible al cargar la página
    headerElement.scrollIntoView({ behavior: "smooth", block: "start" });

    // Añade el evento de finalización de animación
    const handleAnimationEnd = () => {
      headerElement.classList.add('hidden'); // Asegura que el elemento quede oculto y no ocupe espacio
    };

    headerElement.addEventListener('animationend', handleAnimationEnd);

    return () => {
      headerElement.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  // Función para manejar el desplazamiento suave
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      let offset;
      const windowWidth = window.innerWidth;

      // Ajustar el vh basado en el tamaño de la ventana
      if (windowWidth < 768) {
        // Pantallas pequeñas (móviles)
        offset = window.innerHeight * 0.05; // 15vh
      } else if (windowWidth < 1200) {
        // Pantallas medianas (tabletas)
        offset = window.innerHeight * 0.065; // 10vh
      }
      else if (windowWidth < 1500) {
        // Pantallas medianas (tabletas)
        offset = window.innerHeight * 0.1; // 10vh
      } else {
        // Pantallas grandes (escritorio)
        offset = window.innerHeight * 0.07; // 5vh
      }

      // Calcular la posición de desplazamiento de forma absoluta
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="App-header"  ref={headerRef}>
        <div className="logo">
          <img src={logo2} alt="Logo" className="logo-icon" />
          <p>Bea Photography</p>
        </div>
        <nav>
          <ul className="nav-links">

            <li>
              <a href="#hero-container" onClick={(event) => handleSmoothScroll(event, "hero-container")}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#blanco-container" onClick={(event) => handleSmoothScroll(event, "blanco-container")}>
                Blanco
              </a>
            </li>
            <li>
              <a href="#negro-container" onClick={(event) => handleSmoothScroll(event, "negro-container")}>
                Negro
              </a>
            </li>
            <li>
              <a href="#hombre-container" onClick={(event) => handleSmoothScroll(event, "hombre-container")}>
                Urban
              </a>
            </li>
            <li>
              <a href="#cronicas-container" onClick={(event) => handleSmoothScroll(event, "cronicas-container")}>
                Galeria
              </a>
            </li>
            
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
