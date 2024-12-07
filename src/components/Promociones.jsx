import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; // Correcto según tus ajustes
import 'swiper/css';
import 'swiper/css/pagination';

const Promociones = () => {
  const promotions = [
    {
      src: '/promotions/P1.png',
      alt: 'Promoción 1',
      title: '🌱 Bolsa Ecológica',
      description: '¡Compra 2 y llévate 3! 🛍️ Aprovecha esta oferta sostenible y lleva más por menos. ♻️ ¡Solo por tiempo limitado!',
    },
    {
      src: '/promotions/P2.png',
      alt: 'Promoción 2',
      title: '❄️ Promoción de Invierno',
      description: '¡Aprovecha nuestra oferta de empaques ecológicos! ♻️ Materiales 100% sostenibles para que tu compra sea aún más verde 🌱 ¡Solo por tiempo limitado!',
    },    
    {
      src: '/promotions/P3.png',
      alt: 'Promoción 3',
      title: '🌿 Descuento por Sostenibilidad',
      description: 'Compra un set y recibe un regalo exclusivo 🌟 ¡Apoya el medio ambiente y disfruta de sorpresas! 🎉 ¡Hasta agotar existencias!',
    },
    {
      src: '/promotions/P4.png',
      alt: 'Promoción 4',
      title: '♻️ Set Eco-friendly',
      description: 'Recibe un 15% de descuento al reciclar tu empaque con nosotros. ♻️ ¡Cuida el planeta y ahorra mientras lo haces! 💚',
    },{
      src: '/promotions/P1.png',
      alt: 'Promoción 1',
      title: '🌱 Bolsa Ecológica',
      description: '¡Compra 2 y llévate 3! 🛍️ Aprovecha esta oferta sostenible y lleva más por menos. ♻️ ¡Solo por tiempo limitado!',
    },
    {
      src: '/promotions/P2.png',
      alt: 'Promoción 2',
      title: '❄️ Promoción de Invierno',
      description: '¡Aprovecha nuestra oferta de empaques ecológicos! ♻️ Materiales 100% sostenibles para que tu compra sea aún más verde 🌱 ¡Solo por tiempo limitado!',
    },    
    {
      src: '/promotions/P3.png',
      alt: 'Promoción 3',
      title: '🌿 Descuento por Sostenibilidad',
      description: 'Compra un set y recibe un regalo exclusivo 🌟 ¡Apoya el medio ambiente y disfruta de sorpresas! 🎉 ¡Hasta agotar existencias!',
    },
    {
      src: '/promotions/P4.png',
      alt: 'Promoción 4',
      title: '♻️ Set Eco-friendly',
      description: 'Recibe un 15% de descuento al reciclar tu empaque con nosotros. ♻️ ¡Cuida el planeta y ahorra mientras lo haces! 💚',
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
