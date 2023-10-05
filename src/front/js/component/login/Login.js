import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import "../../../styles/login.css";

const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="body d-md-flex align-items-center box-2 border-0">
        <div className="box-1 mt-md-0 mt-5">
          <img
            src="https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_1280.jpg"
            className="img-register"
            style={{ height: "600px" }}
            alt=""
          />
        </div>
        <div className="container">
          <form
            className="form col-md-11 p-1"
            onSubmit={(e) => {
              e.preventDefault();
              actions.handleSubmitLogin(e, navigate);
            }}
          >
            <div className="container">
              <label htmlFor="correo" className="text-dark">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="correo"
                placeholder="Email"
                name="email"
                value={store.email}
                onChange={(e) => actions.handleChangeLogin(e)}
                autoComplete="off"
              />
            </div>
            <div className="container">
              <label htmlFor="inputPassword2" className="text-dark">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="Password"
                name="password"
                value={store.password}
                onChange={(e) => actions.handleChangeLogin(e)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="buttonLogin btn btn-primary  p-2"
              >
                Iniciar Sesión
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <button className="buttonLogin btn btn-primary  ">
                <Link to="/register">Registrarse</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
