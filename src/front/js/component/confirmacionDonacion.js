import React from "react"
import { Link } from "react-router-dom";


export const ConfirmacionDonacion = () => {
    return (<div className="container">
        <div className="mb-3 mx-auto p-2">
  <label for="exampleFormControlInput1" className="form-label">Email</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email de usuario registrado"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">¿Cómo estuvo tu entrega?</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button type="button" class="btn btn-dark">Confirmar</button>
</div>
</div>
    )
}