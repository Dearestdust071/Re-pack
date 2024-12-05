import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; // Correcto según tus ajustes
import 'swiper/css';
import 'swiper/css/pagination';

const Productos = () => {
  const products = [
    {
      src: '/products/P1.png',
      alt: 'Mochila de tela',
      title: '🌿 Mochila Eco-Style',
      description: 'Amando el ambiente con estilo. ¡Diseño personalizable para que brilles!',
    },
    {
      src: '/products/P2.png',
      alt: 'Paquete amigos del ambiente',
      title: '🌍 Paquete Amigos del Ambiente',
      description: 'Un set completo: bolsa tipo ziploc, caja eco-friendly y bolsa premium.',
    },
    {
      src: '/products/P3.png',
      alt: 'Bolsa amigos del mar',
      title: '🌊 Bolsa Amigos del Mar',
      description: 'Hecha de tela resistente y con diseños personalizables. ¡Perfecta para la playa! 🐚',
    },
    {
      src: '/products/P4.jpg',
      alt: 'Paquete tesoro de la tierra (Son vasos)',
      title: '🌱 Paquete Tesoro de la Tierra',
      description: 'Caja y bolsa al estilo elegante y sostenible. ¡Un combo único! 🌟',
    },
    {
      src: '/products/P1.png',
      alt: 'Mochila de tela',
      title: '🌿 Mochila Eco-Style',
      description: 'Amando el ambiente con estilo. ¡Diseño personalizable para que brilles!',
    },
    {
      src: '/products/P2.png',
      alt: 'Paquete amigos del ambiente',
      title: '🌍 Paquete Amigos del Ambiente',
      description: 'Un set completo: bolsa tipo ziploc, caja eco-friendly y bolsa premium.',
    },
    {
      src: '/products/P3.png',
      alt: 'Bolsa amigos del mar',
      title: '🌊 Bolsa Amigos del Mar',
      description: 'Hecha de tela resistente y con diseños personalizables. ¡Perfecta para la playa! 🐚',
    },
    {
      src: '/products/P4.jpg',
      alt: 'Paquete tesoro de la tierra (Son vasos)',
      title: '🌱 Paquete Tesoro de la Tierra',
      description: 'Caja y bolsa al estilo elegante y sostenible. ¡Un combo único! 🌟',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-[-100px]"> {/* Centra el carrusel */}
      <h2 className="text-4xl font-bold text-[#485935] mb-[150px]">Productos</h2>

      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={true} // Desactiva los bullets
        navigation={false} // Activa las flechas de navegación
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-6xl"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="flex-shrink-0 w-80 h-[450px] bg-[#CADBB7] shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img
                src={product.src}
                alt={product.alt}
                className="w-full h-[60%] object-contain bg-[#F2F2F2]"
              />
              <div className="p-4 bg-[#485935] text-white flex flex-col items-center h-[40%]">
                <h3 className="text-lg font-semibold text-center">{product.title}</h3>
                <p className="text-sm text-[#CADBB7] text-center">{product.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Productos;
