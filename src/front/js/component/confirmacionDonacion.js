import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const ConfirmacionDonacion = () => {
	const {store, actions} = useContext(Context)
	useEffect(()=>{
		actions.getLibrosDonados();
	}, [])
	return (
		<div className="container">
			<h1> Donaciones Recibidas</h1>
			<div className="table-responsive">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Libro</th>
							<th>Usuario donante</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{
							store.librosDonadosRecibidos.map((libro, i) =>
								<tr key={i}>
									<td>{libro?.book?.title}</td>
									<td>{libro?.donante?.name}</td>
									<td>
										<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={e=>actions.asignarDonacion(libro.id)}>
											Confirmar
										</button>
									</td>
								</tr>
							)
						}
					</tbody>
				</table>

			</div>


			<div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
							<button type="button" id="botonCerrar" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							<div className="container">
								<div className="mb-3">
									<label forHtml="exampleFormControlTextarea1" className="form-label">¿Cómo estuvo tu entrega?</label>
									<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={store.confirmacionDonacion.comentario} onChange={actions.changeConfirmacionComentario}></textarea>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-primary" onClick={actions.enviarConfirmacion}>Confirmar Donacion</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}