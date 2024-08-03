import React from "react";
import "./Header.css"; // Importa el archivo de estilos
import logo2 from "./img/logow.png"; // Importa la imagen aquí

function Header() {
  const handleSmoothScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="App-header">
        <div className="logo">
          <img src={logo2} alt="Logo" className="logo-icon" />
          <p>Bea Photography</p>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#header" onClick={(event) => handleSmoothScroll(event, "header")}>
                Header
              </a>
            </li>
            <li>
              <a href="#hero" onClick={(event) => handleSmoothScroll(event, "hero")}>
                Hero
              </a>
            </li>
            <li>
              <a href="#blanco" onClick={(event) => handleSmoothScroll(event, "blanco")}>
                Blanco
              </a>
            </li>
            <li>
              <a href="#negro" onClick={(event) => handleSmoothScroll(event, "negro")}>
                Negro
              </a>
            </li>
            <li>
              <a href="#hombre" onClick={(event) => handleSmoothScroll(event, "hombre")}>
                Hombre
              </a>
            </li>
            <li>
              <a href="#cronicas" onClick={(event) => handleSmoothScroll(event, "cronicas")}>
                Cronicas
              </a>
            </li>
            <li>
              <a href="#footer" onClick={(event) => handleSmoothScroll(event, "footer")}>
                Footer
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
