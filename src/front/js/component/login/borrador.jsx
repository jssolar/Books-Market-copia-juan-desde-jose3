import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/register.css";
import imgRegister from "../../img/register.jpg";

const Register = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (

    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form
            className="form-control shadow p-3"
            onSubmit={(e) => {
              actions.submitUserImage(e, navigate);
            }}
          >
            <div className="col-md-6">
              <div className="card card0">
                <div className="row rowForm">
                  <img
                    src={imgRegister}
                    className="imagenEegister"
                    alt="img-register"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="form" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Ingresa tu nombre"
                maxLength="20"
                minLength="3"
                required
                name="name"
                value={store.name}
                onChange={actions.inputUserValue}
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                aria-describedby="emailHelp"
                placeholder="Ingresa tu apellido"
                maxLength="20"
                minLength="3"
                required
                name="lastname"
                value={store.lastname}
                onChange={actions.inputUserValue}
              />
              <label htmlFor="exampleInputEmail1" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Ingresa tu e-mail"
                required
                name="email"
                value={store.email}
                onChange={actions.inputUserValue}
              />
            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Contraseña"
                required
                name="password"
                value={store.password}
                onChange={actions.inputUserValue}
              />
            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Repetir Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="rep_password"
                placeholder="Repita contraseña"
                required
                name="rep_password"
                value={store.rep_password}
                onChange={actions.inputUserValue}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="region">
                Región
              </label>
              <select
                className="form-select"
                id="region"
                required
                name="region"
                value={store.region.toString()}
                onChange={actions.inputUserValue}
                multiple={false}
              >
                <option value="">Selecciona tu región</option>
                <option value="Arica y Parinacota">Arica y Parinacota</option>
                <option value="Tarapacá">Tarapacá</option>
                <option value="Antofagasta">Antofagasta</option>
                <option value="Atacama">Atacama</option>
                <option value="Coquimbo">Coquimbo</option>
                <option value="Valparaíso">Valparaíso</option>
                <option value="O'Higgins">O'Higgins</option>
                <option value="Maule">Maule</option>
                <option value="Ñuble">Ñuble</option>
                <option value="Biobío">Biobío</option>
                <option value="La Araucanía">La Araucanía</option>
                <option value="Los Ríos">Los Ríos</option>
                <option value="Los Lagos">Los Lagos</option>
                <option value="Aysén">Aysén</option>
                <option value="Magallanes">Magallanes</option>
                <option value="Metropolitana">Metropolitana</option>
              </select>
            </div>
            <div className="mb-3 ">
              <label htmlFor="photo" className="form-label">
                Foto de perfil
              </label>
              <input
                type="file"
                className="form-control"
                id="userImage"
                placeholder="Sube foto"
                name="userImage"
                onChange={(e) => actions.inputUserImage(e.target.files[0])}
              />
            </div>
            <div className="my-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="Check1"
                required
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Acepto términos y condiciones
              </label>
            </div>
            <button type="submit" className="btn btn-primary my-3">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;