import React from "react"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Carta = (props) => {
  const{store, actions} = useContext(Context);
    return (
        <div className="col">
          <div className="card shadow-sm p-3 mb-5 bg-white rounded">
            <img src={props.img} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{props.titulo}</h5>
              <p className="card-text"><b>{props.autor}</b></p>
              <p className="card-text">{props.categoria}</p>
              <p className="card-text">{props.numerodePaginas}</p>
              <p className="card-text">{props.descripcion}</p>
              {store.currentUser && <Link className="btn btn-dark" to={"/InfoDonante/"+props.index}>
           Ver informacion del donante
              </Link>}
            </div>
          </div>
        </div>
    )
}