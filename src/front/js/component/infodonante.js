import React, { useContext } from "react"
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const InfoDonante = () => {
    const{index} = useParams()
    const{store,actions} = useContext(Context)
    const usuario = store.donatedBook[index].usuario

    return (<div className="d-flex justify-content-center align-items-center" style={{ height: "700px" }}>
        <div className="container">
            <div className="card mb-3 mx-auto p-2" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {usuario.name}</h5>
                            <h5 className="card-title">Email: {usuario.email}</h5>
                            <h5 className="card-title">Region: {usuario.region}</h5>
                            <a href={"mailto: " +usuario.email} className="btn btn-dark">Comunicarme</a>
                            <Link className="btn btn-dark m-1" to="/donacionesRealizadas">
                                Volver
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}