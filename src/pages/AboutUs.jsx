import React from 'react';
import { FaArrowDown } from 'react-icons/fa'; // Icono de flecha

const AboutUs = () => {
  return (
    <div className="bg-[#FBFBFB]">
      {/* Sección de encabezado con imagen de fondo */}
      <section
        id="hero" // ID para el scroll
        className="h-screen flex flex-col justify-center items-center bg-[#93A267] text-white relative"
        style={{ backgroundImage: 'url("/path-to-your-image.jpg")', backgroundSize: 'cover' }}
      >
        <div className="absolute bottom-10">
          <a href="#mission" className="text-white text-5xl">
            <FaArrowDown className="animate-bounce" />
          </a>
        </div>
        <div className="text-center p-6">
          <h1 className="text-5xl font-extrabold">¿Quiénes somos?</h1>
        </div>
      </section>

      {/* Sección de Misión y Visión */}
      <section id="mission" className="h-screen flex flex-col justify-between bg-white text-[#485935]">
        <div className="max-w-6xl mx-auto p-8 flex flex-col justify-between h-full">
          {/* Misión */}
          <div className="mb-[-250px] flex-1 flex flex-col justify-center">
            <h2 className="text-5xl font-semibold mb-2 text-center">Misión</h2>
            <p className="text-2xl leading-relaxed text-center">
              La misión de RePack es revolucionar la forma en que se perciben los empaques, inspirando a nuestros
              clientes a adoptar soluciones sostenibles que contribuyan activamente a la reducción de la contaminación
              y al cuidado del planeta.
            </p>
          </div>

          {/* Visión */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-5xl font-semibold mb-[2] text-center">Visión</h2>
            <p className="text-2xl leading-relaxed text-center">
              La visión de RePack es liderar una cultura de reciclaje y reutilización, promoviendo el conocimiento
              sobre cómo dar una segunda vida a los empaques para disminuir la contaminación. Aspiramos a que las
              próximas generaciones hereden un mundo más limpio, libre de residuos tóxicos y contaminantes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
