import React, { useState, useEffect } from 'react';
import './Hombre.css'; // Asegúrate de que este archivo tenga los estilos básicos
import urbanImage from './img/hombre.jpeg'; // Asegúrate de que la ruta sea correcta

function Hombre() {
  const [objectPosition, setObjectPosition] = useState('0px -400px');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let positionY = -400; // Valor base

      // Calcula el cambio en positionY basado en el tamaño de la ventana
      if (width > 1500) {
        // Ajusta la posición en función de un decremento de 25px por cada 100px de ancho
        const decreaseStep = 25; // El incremento de cada paso
        const baseWidth = 1600; // El ancho base a partir del cual comienza el ajuste
        const step = Math.floor((baseWidth - width) / 25);
        positionY = -400 + step * decreaseStep;
        positionY = Math.max(positionY, -400); // Asegura que positionY no sea menor que -400
      } else {
        // Ajusta la posición en función de un decremento de 50px por cada 100px de ancho
        const decreaseStep = 0; // El incremento de cada paso para ancho menor a 1100px
        const baseWidth = 1200; // El ancho base a partir del cual comienza el ajuste diferente
        const step = Math.floor((baseWidth - width) / 175); // Cambia el divisor a 50
        positionY = 0 + step * decreaseStep;
        positionY = Math.max(positionY, -400); // Asegura que positionY no sea menor que -400
      }




      setObjectPosition(`0px ${positionY}px`);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Inicializa el valor de objectPosition

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="hombre-container">
      <div className="hombre-image">
        <img src={urbanImage} alt="Urban Life" style={{ objectPosition }} />
      </div>
      <div className="hombre-text">
        <h2>Urban Life</h2>
      </div>
    </div>
  );
}

export default Hombre;
