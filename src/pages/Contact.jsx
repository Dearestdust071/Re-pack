import React, { useState } from "react";
import axios from "axios";
import SweetAlert from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    producto: "",
    accion: "",
  });
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.producto || !formData.accion) {
      setFormError("Todos los campos son obligatorios");
      return;
    }
    setFormError(""); // Limpiar errores

    axios
      .post("https://eorlpldwqp5n86b.m.pipedream.net", formData)
      .then(() => {
        SweetAlert.fire({
          title: "Gracias por tu interés",
          text: "Hemos recibido tu solicitud correctamente.",
          icon: "success",
        }).then(() => {
          window.location.href = "/"; // Redirige al inicio
        });
      })
      .catch((error) => {
        SweetAlert.fire({
          title: "Error",
          text: "Hubo un problema al enviar la solicitud.",
          icon: "error",
        });
      });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#FBFBFB] px-4">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-[#485935] mb-6 text-center">Contáctanos</h2>

        {formError && (
          <div className="text-red-500 text-sm mb-4 text-center">
            {formError}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="nombre" className="block text-[#485935] font-semibold">Nombre Completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-3 border border-[#93A267] rounded-md"
            placeholder="Ej: John Doe"
          />
          <small className="text-gray-500">Ejemplo: Mirna Dennise</small>
        </div>

        <div className="mb-4">
          <label htmlFor="correo" className="block text-[#485935] font-semibold">Correo Electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className="w-full p-3 border border-[#93A267] rounded-md"
            placeholder="Ej: correo@dominio.com"
          />
          <small className="text-gray-500">Ejemplo: correo@dominio.com</small>
        </div>

        <div className="mb-4">
          <label htmlFor="producto" className="block text-[#485935] font-semibold">Producto de Interés</label>
          <select
            id="producto"
            name="producto"
            value={formData.producto}
            onChange={handleChange}
            className="w-full p-3 border border-[#93A267] rounded-md"
          >
            <option value="">Selecciona un producto</option>
            <option value="Mochila de tela">Mochila de tela</option>
            <option value="Paquete amigos del ambiente">Paquete amigos del ambiente</option>
            <option value="Bolsa amigos del mar">Bolsa amigos del mar</option>
            <option value="Paquete tesoro de la tierra (Son vasos)">Paquete tesoro de la tierra (Son vasos)</option>
          </select>
          <small className="text-gray-500">Ejemplo: Mochila de tela</small>
        </div>

        <div className="mb-6">
          <label htmlFor="accion" className="block text-[#485935] font-semibold">¿Qué deseas hacer?</label>
          <select
            id="accion"
            name="accion"
            value={formData.accion}
            onChange={handleChange}
            className="w-full p-3 border border-[#93A267] rounded-md"
          >
            <option value="">Selecciona una opción</option>
            <option value="comprar">Comprar</option>
            <option value="vender">Vender</option>
          </select>
          <small className="text-gray-500">¿Te interesa comprar un producto personalizado o vender materiales para los productos?</small>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#93A267] text-white px-6 py-3 rounded-lg w-full max-w-xs"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
