import React, { useEffect, useRef, useState } from 'react';
import './Hero.css'; // Importa el archivo de estilos

function Hero() {
  const [textColor, setTextColor] = useState('#ffffff'); // Color inicial del texto
  const heroRef = useRef(null);
  const heroTextContainerRef = useRef(null); // Ref para el contenedor de texto

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const image = new Image();

    image.src = './img/herobea.jpeg'; // La imagen de fondo
    image.crossOrigin = 'Anonymous'; // Permite cargar imágenes de dominios externos

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const { data } = imageData;
      let r = 0, g = 0, b = 0;

      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }

      r = Math.floor(r / (data.length / 4));
      g = Math.floor(g / (data.length / 4));
      b = Math.floor(b / (data.length / 4));

      // Determinar el color promedio
      const avgColor = (r + g + b) / 3;
      // Si el color promedio es más oscuro, usa texto blanco; si es más claro, usa texto negro
      setTextColor(avgColor < 128 ? '#ffffff' : '#000000');
    };

    // Intersection Observer para la animación de opacidad
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Ajusta el threshold según tus necesidades
    });

    if (heroTextContainerRef.current) {
      observer.observe(heroTextContainerRef.current);
    }

    return () => {
      if (heroTextContainerRef.current) {
        observer.unobserve(heroTextContainerRef.current);
      }
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-text-container" ref={heroTextContainerRef}>
        <h1 className="hero-title" style={{ color: textColor }}>Dynamic Urban Life</h1>
        <h3 className="hero-subtitle1" style={{ color: textColor }}>
          Redescubre la vida urbana, Cautívate con el Momento Captúralo
        </h3>
        <h3 className="hero-subtitle" style={{ color: textColor }}>
          Explora la elegancia en cada instante
        </h3>
      </div>
    </section>
  );
}

export default Hero;
