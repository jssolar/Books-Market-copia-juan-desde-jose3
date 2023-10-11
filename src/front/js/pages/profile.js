import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/profile.css";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getMySaleBooks(store.currentUser?.user?.id);
    actions.getMyExchangeBooks(store.currentUser?.user?.id);
    actions.getAllMyPurchasedBooks(store.currentUser?.user?.id);
    actions.getAllMySoldBooks(store.currentUser?.user?.id);
  }, [store.currentUser?.user?.id]);

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row containerProfile p-4 px-0" style={{ width: "950px" }}>
        <div className="col-md-5 mx-0 px-0" style={{ width: "350px" }}>
          <div
            className="card cardDatos border-0 containerFoto"
            style={{ width: "350px" }}
          >
            <div
              className="d-flex px-0 overflow-profile justify-content-center containerFoto border-0"
              style={{ width: "350px" }}
            >
              <img
                className="card-img-top mx-0 card-img-top-profile cardImage"
                style={{ width: "300px", height: "300px" }}
                src={store.currentUser?.user?.userImage}
                alt={"{`Portada de ${libro.title}`}"}
              />
            </div>
          </div>
        </div>
        <div className="col-md-7 text-center" style={{ width: "550px" }}>
          <div className="row">
            <p className="bienvenida">
              Nos alegra que estes aquí, {store.currentUser?.user?.name}!{" "}
            </p>
          </div>
          <div className="row card-body containerDatosPersonales">
            <Link
              to={`/myInformation/${store.currentUser?.user?.id}`}
              className="btn btn-dark btn buttonPerfil p-1 mt-2"
            >
              Mi Perfíl
            </Link>
          </div>
          <div className="row justify-content-center ">
            <div className="col d-flex justify-content-center ">
              <Link to="/mySaleBooks" className="btn btn-dark w-100 itemPerfil">
                Mis libros en venta
              </Link>
            </div>
            <div className="col d-flex justify-content-center ">
              <Link
                to="/myExchangeBooks"
                className="btn btn-dark w-100 itemPerfil"
              >
                Mis libros en Intercambio
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center r">
              <Link
                to="/purchasedBooks"
                className="btn btn-dark w-100 itemPerfil"
              >
                Mis compras realizadas
              </Link>
            </div>
            <div className="col d-flex justify-content-center ">
              <Link to="/soldBooks" className="btn btn-dark w-100 itemPerfil">
                Mis ventas realizadas
              </Link>
            </div>
          </div>
          <div className="row ">
            <div className="col d-flex justify-content-center ">
              <Link
                to="/registerBook"
                className="btn btn-dark w-100 itemPerfil"
              >
                Publicar Libros
              </Link>
            </div>
            <div className="col d-flex justify-content-center">
              <button className="btn btn-dark w-100 itemPerfil">
                Editar Libros
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
