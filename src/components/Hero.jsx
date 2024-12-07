import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(/hero.jpg)` }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white px-4">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">Bienvenidos a Re-Pack</h1>
          <p className="text-lg md:text-xl mb-6">
            Empaques reutilizables y biodegradables para un futuro sostenible.
          </p>
          <a href="#productos" className="bg-[#93A267] text-white py-2 px-6 rounded-lg hover:bg-[#7c8e5e] transition duration-300">
            Descubre nuestros productos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
