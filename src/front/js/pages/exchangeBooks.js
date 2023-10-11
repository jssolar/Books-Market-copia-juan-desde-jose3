import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
// import "../../styles/exchangeBooks.css";

export const ExchangeBooks = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getLibros();
    actions.getExchangeBooks();
    actions.getSaleBooks();
  }, []);

  return (
    <div>
      <div className="container-fluid mt-4">
        <div className="text-center">
          <h1 className="titulo-exchange">LIBROS PARA INTERCAMBIO</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {actions.shuffleArray(store.exchangeBooks).map((libro, i) => (
            <div
              className="contenedor-card p-0"
              style={{ width: "220px", height: "300" }}
              key={i}
            >
              <div className="d-flex justify-content-center">
                <img
                  className="card-img-top allbooks-img mb-0"
                  style={{ width: "220px", height: "300px" }}
                  src={libro.photo}
                  alt={`Portada de ${libro.title}`}
                />
              </div>
              <div className="card-body pt-0 mt-0 d-block justify-content-center">
                <div style={{ height: "45px" }}>
                  <p className="text-center m-1 fw-bold">{libro.title}</p>
                </div>
                <div>
                  <p className="text-center text-capitalize mb-1 fw-medium">
                    {libro.author}
                  </p>
                </div>
                <div>
                  <p className="text-center">{libro.type}</p>
                </div>

                <div className="d-flex justify-content-center mt-1">
                  <Link
                    to={`/allBooks/bookDetails/${libro.id}`}
                    className="btn btn-dark mb-3 boton-ver-detalles"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
