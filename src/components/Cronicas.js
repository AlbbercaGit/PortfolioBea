import React from 'react';
import './Cronicas.css'; // Asegúrate de crear este archivo para los estilos

// Importar las imágenes
import img1 from './img/ruido1.jpeg'; // Asegúrate de que la ruta sea correcta
import img2 from './img/ruido2.jpeg';
import img3 from './img/ruido3.jpeg';
import img4 from './img/ruido4.jpeg';

function Cronicas() {
  return (
    <div className="cronicas-container">

      <div className="cronicas-right-column">
        <div className="cronicas-grid">
          <div className="cronicas-grid-item">
            <img src={img1} alt="Imagen 1" />
          </div>
          <div className="cronicas-grid-item">
            <img src={img2} alt="Imagen 2" />
          </div>
          <div className="cronicas-grid-item">
            <img src={img3} alt="Imagen 3" />
          </div>
          <div className="cronicas-grid-item">
            <img src={img4} alt="Imagen 4" />
          </div>
        </div>
      </div>
      <div className="cronicas-left-column">
        <h1>Crónicas urbanas: capturando el corazón de la ciudad</h1>
        <h3>
          Sumérgete en la dinámica fotografía callejera, donde el pulso de la ciudad se destila en composiciones atemporales en blanco y negro. Desde los momentos fugaces de la vida del día a día hasta la cautivadora interacción de luces y sombras, cada fotografía cuenta una historia que trasciende lo ordinario y atemporal de la vida, invitándote a ver el mundo a través de una nueva perspectiva.
        </h3>
      </div>
    </div>
  );
}

export default Cronicas;
