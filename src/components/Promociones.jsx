import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; // Correcto según tus ajustes
import 'swiper/css';
import 'swiper/css/pagination';

const Promociones = () => {
  const promotions = [
    {
      src: 'https://via.placeholder.com/400x400.png?text=Promoci%C3%B3n+1',
      alt: 'Promoción 1',
      title: '🔥 Promoción de Invierno',
      description: 'Descuento del 20% en todos nuestros productos ecológicos. ¡Aprovecha antes de que se acabe!',
    },
    {
      src: 'https://via.placeholder.com/400x400.png?text=Promoci%C3%B3n+2',
      alt: 'Promoción 2',
      title: '🌟 Compra 2, lleva 3',
      description: 'Compra cualquier producto y llévate otro gratis. ¡Solo por tiempo limitado!',
    },
    {
      src: 'https://via.placeholder.com/400x400.png?text=Promoci%C3%B3n+3',
      alt: 'Promoción 3',
      title: '🎁 Set Eco-Friendly',
      description: 'Compra un set y recibe un regalo exclusivo. ¡Solo hasta agotar existencias!',
    },
    {
      src: 'https://via.placeholder.com/400x400.png?text=Promoci%C3%B3n+4',
      alt: 'Promoción 4',
      title: '💚 Descuento por Sostenibilidad',
      description: 'Recibe un 15% de descuento al reciclar tu empaque de vuelta con nosotros.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-[-150px]"> {/* Centra el carrusel */}
      <h2 className="text-4xl font-bold text-[#485935] mb-[50px]">Promociones</h2>

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
        {promotions.map((promotion, index) => (
          <SwiperSlide key={index}>
            <div className="flex-shrink-0 w-80 h-[450px] bg-[#CADBB7] shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img
                src={promotion.src}
                alt={promotion.alt}
                className="w-full h-[60%] object-contain bg-[#F2F2F2]"
              />
              <div className="p-4 bg-[#485935] text-white flex flex-col items-center h-[40%]">
                <h3 className="text-lg font-semibold text-center">{promotion.title}</h3>
                <p className="text-sm text-[#CADBB7] text-center">{promotion.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Promociones;
