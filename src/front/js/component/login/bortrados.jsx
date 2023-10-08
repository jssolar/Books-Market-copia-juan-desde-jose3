/* // RegistroLibro.js

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistroLibro = () => {
  const [libro, setLibro] = useState({
    titulo: "",
    autor: "",
    categoria: "",
    numPaginas: "",
    descripcion: "",
    imagen: null,
    tipo: "venta",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLibro({ ...libro, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción, como enviar los datos al servidor.
    // En este ejemplo, solo mostraremos un mensaje de éxito.
    toast.success("Libro registrado con éxito");
  };

  return (
    <div>
      <h1>Registro de Libro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="titulo"
            value={libro.titulo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Autor:</label>
          <input
            type="text"
            name="autor"
            value={libro.autor}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Categoría:</label>
          <input
            type="text"
            name="categoria"
            value={libro.categoria}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Número de Páginas:</label>
          <input
            type="number"
            name="numPaginas"
            value={libro.numPaginas}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={libro.descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="file"
            accept="image/*"
            name="imagen"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tipo:</label>
          <select name="tipo" value={libro.tipo} onChange={handleChange}>
            <option value="venta">Venta</option>
            <option value="intercambio">Intercambio</option>
            <option value="regalo">Regalo</option>
          </select>
        </div>
        <button type="submit">Publicar</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegistroLibro;
 */