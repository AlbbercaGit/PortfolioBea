import React from 'react';
import './Negro.css';

// Importar las imágenes
import imgRightTop from './img/parque.jpeg';
import imgRightBottom from './img/puertas.jpeg';

function NegroLayout() {
  return (
    <div className="negro-container"  id="negro-container">
      <div className="negro-left-column">
        <div className="negro-text-grid">
          <h1>Elegancia en blanco y negro: retratos atemporales que trascienden lo ordinario</h1>
          <h3>Descubre el arte detrás de la lente, donde el ojo agudo del fotógrafo transforma lo mundano en extraordinario</h3>
          <h1>Detrás de la lente</h1>
          <h3>Descubre el arte detrás de la lente, donde el ojo agudo del fotógrafo transforma lo mundano en extraordinario</h3>
          <h1>Visión creativa</h1>
          <h3>Profundiza en el enfoque artístico que infunde a cada fotografía una elegancia atemporal, mostrando la belleza de lo cotidiano</h3>
          <h1>El arte de observar</h1>
          <h3>Descubre los secretos detrás de la lente, mientras el fotógrafo comparte conocimientos sobre el arte de capturar la esencia de lo prestablecido</h3>
        </div>
      </div>
      <div className="negro-right-column">
        <div className="negro-right-top-top">
          <img src={imgRightTop} alt="Top Section" />
        </div>
        <div className="negro-right-top-bottom">
          <img src={imgRightBottom} alt="Bottom Section" />
        </div>
      </div>
    </div>
  );
}

export default NegroLayout;
