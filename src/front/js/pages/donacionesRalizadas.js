import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";


import { Context } from "../store/appContext";
import { Carta } from "../component/carta";

export const DonacionesRealizadas = () => {
    const estilodedonaciones = {
        backgroundColor: 'rgba(146, 197, 211)',
      };
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getLibrosDonados()
    }, []);

    return (<div style={estilodedonaciones}>
        <div className="container-fluid">
            <div className="text-center text-dark">
                <h1>Elige tu libro</h1>
            </div>
            <div className="row row-cols-3 g-4">
                {store.donatedBook.map((donativos, i)=>
                <Carta key={i} titulo={donativos.title}
                autor={donativos.author}
                categoria={donativos.cathegory}
                numerodePaginas={donativos.number_of_pages}
                descripcion={donativos.description}
                index={i}
                img={donativos.photo}></Carta>
                )}
            </div>
        </div>
        </div>
    );
};