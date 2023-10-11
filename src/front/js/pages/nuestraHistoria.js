import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const NuestraHistoria = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="text-center m-3 mt-5 mb-5">
        <h1>NUESTRA HISTORIA</h1>
      </div>
      <div className="d-flex m-3 justify-content-evenly ">
        <div className="mx-2">
          <img
            className="rounded"
            src="https://www.nationalgeographic.com.es/medio/2022/04/23/libros_b2d310d5_1280x852.jpg"
            alt="..."
            style={{ width: "px", height: "400px" }}
          />
        </div>
        <div className="w-50 d-flex align-items-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            inventore quo natus fugit ut nemo tempore, facere ducimus incidunt.
            Numquam tempora aperiam ipsa. Quo dolorum perspiciatis quia
            inventore. Quia, vero.
          </p>
        </div>
      </div>
      <div className="text-center d-flex justify-content-evenly">
        <div className="w-50 m-5  border border-black ">
          <h3 className="border solid 2px bg-dark text-light">Vision</h3>
          <p>
            Nuestra misión es crear una plataforma en línea que facilite la
            venta, el intercambio y la donación de libros. Nos comprometemos a
            promover la lectura, la sostenibilidad y la accesibilidad a la
            literatura. Nuestro enfoque es impulsar una comunidad de amantes de
            la lectura que comparten el objetivo de hacer que los libros estén
            al alcance de todos.
          </p>
        </div>
        <div className="w-50 m-5 border border-black ">
          <h3 className="border solid 2px bg-dark text-light">Mission</h3>
          <p>
            Nuestra visión es ser un motor de cambio en la sociedad a través de
            la promoción de la lectura y la cultura de la sostenibilidad.
            Buscamos crear una plataforma en línea que no solo sea un lugar para
            transacciones de libros, sino un espacio donde los lectores se unan
            en una comunidad que valora el conocimiento compartido y la
            accesibilidad a la literatura. Queremos inspirar a la sociedad a
            apreciar la importancia de la lectura y a abrazar un enfoque más
            sostenible para compartir libros.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
