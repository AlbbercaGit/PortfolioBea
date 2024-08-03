import React from 'react';
import './Blanco.css';

// Importar las imágenes
import photo1 from './img/electricas.jpeg';
import photo2 from './img/escaleras.jpeg';
import photo3 from './img/parque.jpeg';
import photo4 from './img/trenes.jpeg';
import photo5 from './img/obra.jpeg';
import photo6 from './img/semaforo.jpeg';

function Blanco() {
  return (
    <div className="container">
      <div className="left-column">
        <div className="left-top">
          <img src={photo1} alt="Photo 1" className="left-top-img small-square" />
          <img src={photo2} alt="Photo 2" className="left-top-img rectangle" />
          <img src={photo3} alt="Photo 3" className="left-top-img small-square" />
        </div>
        <div className="left-bottom">
          <h3>Adéntrate en el vibrante tapiz de la vida urbana, donde cada fotograma cuenta algo único</h3>
          <button className="gallery-button">Galeria</button>
        </div>
      </div>
      <div className="right-column">
        <div className="right-top">
          <div className="right-top-left">
            <img src={photo4} alt="Photo 4" className="right-top-img small-square2" />
            <img src={photo5} alt="Photo 5" className="right-top-img small-square2" />
          </div>
          <img src={photo6} alt="Photo 6" className="right-top-img vertical-rectangle" />
        </div>
        <div className="right-bottom">
          <h2>Momentos en movimiento: capturando el momento</h2>
          <h3>Experimenta la interacción dinámica de la luz, la sombra y el movimiento.</h3>
        </div>
      </div>
    </div>
  );
}

export default Blanco;
