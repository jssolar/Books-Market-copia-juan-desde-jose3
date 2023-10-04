import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/allBooks.css";

import { Context } from "../store/appContext";

export const AllBooks = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="container-fluid">
        <div className="text-center m-3 mt-5 mb-5">
          <h1 className="tituloAll">LIBROS EN VENTA</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-center mb-5">
          {store.showBooks.map((libro, i) => (
            <div
              className="contenedor-card"
              style={{ width: "220px", height: "300" }}
              key={i}
            >
              <div className="d-flex justify-content-center  cara front-libro">
                <img
                  className="card-img-top allbooks-img"
                  style={{ maxWidth: "100%", maxHeight: "300px" }}
                  src={libro.photo}
                  alt={`Portada de ${libro.title}`}
                />
              </div>
              <div className="card-body cara back-libro">
                <h6 className="card-title">{libro.title}</h6>
                <p className="card-text">{libro.author}</p>
                <p className="card-text">{libro.price}</p>
                <Link
                  to={`/allBooks/bookDetails/${libro.id}`}
                  className="btn btn-dark mb-3 boton-ver-detalles"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
