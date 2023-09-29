import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const ConfirmacionEnvio = () => {
    const estiloenvio = {
        backgroundColor: 'rgba(211, 197, 146)',
      };
    
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.getLibrosDonadosUsuario();
    },[])
    return (<div style={estiloenvio}>
        <div className="container">
            {store.envio.enviado &&	
                <div className="alert alert-success">
                    Se ha realizado la donacion
                </div>
            }
            <div className="card mt-5">
                <div className="card-body">
                    <h5 className="card-title">Envio de Donación</h5>
                    <div className="mb-3 mx-auto p-2">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email de usuario registrado" name="email" value={store.envio.email} onChange={actions.changeEnvio}/>
                    </div>
                    <div className="mb-3 mx-auto p-2">
                        <label htmlFor="">Selecciona el libro</label>
                        <select className="form-select" aria-label="Default select example" name="libro" value={store.envio.libro} onChange={actions.changeEnvio}>
                            <option defaultValue>Selecciona tu libro</option>
                            {
                                store.librosDonadosUsuario?.map(libro=>{
                                    return(
                                        <option value={libro?.id}>{libro?.title}</option>
                                    )
                                })
                            }
                        </select>

                    </div>
                    <div className="mb-3 mx-auto p-2">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Comentario</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={store.envio.comentario} name="comentario" onChange={actions.changeEnvio}></textarea>
                        <button type="button" className="btn btn-dark mt-2" onClick={actions.confirmarEnvioDonacion}>Confirmar</button>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}