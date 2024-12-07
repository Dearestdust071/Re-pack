import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Productos from '../components/Productos';
import Promociones from '../components/Promociones';
import FloatingSocialIcons from '../components/FloatingSocialIcons';

const Home = () => {
  const lastScrollPosition = useRef(0); // Usamos useRef para persistir el valor entre renderizados

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const productosSection = document.getElementById('productos');
      const promocionesSection = document.getElementById('promociones');

      // Obtenemos la posición actual del scroll
      const scrollPosition = window.scrollY;

      // Verificamos las alturas y las posiciones de las secciones
      const heroHeight = heroSection.offsetHeight;
      const productosTop = productosSection.offsetTop;
      const promocionesTop = promocionesSection.offsetTop;

      // Determinamos si el scroll es hacia abajo o hacia arriba
      const isScrollingDown = scrollPosition > lastScrollPosition.current;

      // Cuando estamos bajando, solo hacemos el salto después de la sección Hero
      if (isScrollingDown) {
        if (scrollPosition >= heroHeight && scrollPosition < productosTop) {
          // Desplazar a la sección de productos
          window.scrollTo({ top: productosTop, behavior: 'smooth' });
        } 
        else if (scrollPosition >= productosTop && scrollPosition < promocionesTop) {
          // Desplazar a la sección de promociones
          window.scrollTo({ top: promocionesTop, behavior: 'smooth' });
        }
      } else {
        // Cuando estamos subiendo
        if (scrollPosition < productosTop) {
          // Desplazar a la sección de hero si estamos subiendo
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (scrollPosition < promocionesTop) {
          // Desplazar a la sección de productos si estamos subiendo
          window.scrollTo({ top: productosTop, behavior: 'smooth' });
        }
      }

      // Actualizamos la última posición del scroll
      lastScrollPosition.current = scrollPosition;
    };

    // Agregar el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <section id="hero" className="h-screen bg-[#93A267] flex justify-center items-center">
        <Hero />
      </section>
      <FloatingSocialIcons></FloatingSocialIcons>

      {/* Productos */}
      <section id="productos">
        <Productos /> {/* Componente Carrusel de Productos */}
      </section>

      {/* Promociones */}
      <section id="promociones">
        <Promociones /> {/* Componente Carrusel de Promociones */}
      </section>
    </div>
  );
};

export default Home;
