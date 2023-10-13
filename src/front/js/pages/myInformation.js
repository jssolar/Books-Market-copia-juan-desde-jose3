import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/profile.css";
import { Context } from "../store/appContext";

export const MyInformation = () => {
  const { store, actions } = useContext(Context);
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar si estamos en modo edición
  const [editedProfile, setEditedProfile] = useState({}); // Estado para mostar los datos del perfil

  useEffect(() => {}, []);

  const handleEditClick = () => {
    setIsEditing(true);
    // Inicializamos el objeto de libro editado con los valores actuales del libro
    setEditedProfile({
      name: store.currentUser?.user?.name,
      lastname: store.currentUser?.user?.lastname,
      email: store.currentUser?.user?.email,
      region: store.currentUser?.user?.region,
    });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    actions.updateProfile(id, editedProfile, navigate);
    // Desactiva el modo de edición
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row containerProfile">
        <div className="col-md-6">
          <div className="card cardDatos border-0 m-3">
            <div className="d-flex overflow-profile justify-content-center containerFoto border-0">
              <img
                className="card-img-top card-img-top-profile cardImage"
                style={{ width: "300px", height: "300px" }}
                src={store.currentUser?.user?.userImage}
                alt="{`Portada de ${libro.title}`}"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6  row">
          <div className="row w-100">
            <h3 className="col-10 fs-4 text-dark mb-1">
              Mi información del Perfil
            </h3>
            <div className="col-1">
              {isEditing ? (
                <></>
              ) : (
                <button
                  type="button"
                  class=" btn btn-dark btn-md buttonPerfil k mb-5"
                  onClick={handleEditClick}
                >
                  Editar
                </button>
              )}
            </div>
          </div>
          {isEditing ? (
            <div>
              <form>
                <div className="d-flex align-items-center mb-3 m-0 p-0 text-center justify-content-center  ">
                  <label
                    htmlFor="title"
                    className="form-label m-0 p-0 pt-2 editProfile rounded-start-pill text-black fs-6"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="m-0 p-0 ps-3 inputProfile2  bg-white fs-6 text-black"
                    id="name"
                    name="name"
                    value={editedProfile.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex align-items-center mb-3 m-0 p-0 text-center justify-content-center  ">
                  <label
                    htmlFor="author"
                    className="form-label m-0 p-0 pt-2 editProfile rounded-start-pill text-black fs-6"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="fm-0 p-0 ps-3 inputProfile2 bg-white fs-6 rounded-end-pill text-black"
                    id="lastname"
                    name="lastname"
                    value={editedProfile.lastname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex align-items-center mb-3 m-0 p-0 text-center justify-content-center  ">
                  <label
                    htmlFor="description"
                    className="form-label m-0 p-0 pt-2 editProfile rounded-start-pill text-black fs-6"
                  >
                    E-mail
                  </label>
                  <input
                    type="text"
                    className="m-0 p-0 ps-3 inputProfile2 bg-white fs-6 rounded-end-pill text-black"
                    id="email"
                    name="email"
                    value={editedProfile.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex align-items-center mb-3 m-0 p-0 text-center justify-content-center  ">
                  <label
                    htmlFor="cathegory"
                    className="form-label m-0 p-0 pt-2 editProfile rounded-start-pill text-black fs-6"
                  >
                    Región
                  </label>
                  <input
                    type="text"
                    className=" m-0 p-0 ps-3 inputProfile2 bg-white fs-6 rounded-end-pill text-black"
                    id="region"
                    name="region"
                    value={editedProfile.region}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  className="buttonEdition btn btn-dark m-1 me-2"
                  onClick={handleSaveClick}
                >
                  Guardar
                </button>
                <button
                  className="buttonEdition btn btn-dark m-1"
                  onClick={handleCancelClick}
                >
                  Cancelar
                </button>
              </form>
            </div>
          ) : (
            <div className="container">
              <div className=" container d-flex align-items-center m-0 p-0 mb-2 text-center justify-content-center  ">
                <p className="editProfile rounded-start-pill pt-2 fs-6">
                  Nombre
                </p>
                <p className="inputProfile bg-white fs-6 pt-2 rounded-end-pill text-black ">
                  {store.currentUser?.user?.name}
                </p>
              </div>
              <div className="d-flex align-items-center m-0 p-0 mb-2 text-center justify-content-center  ">
                <p className="editProfile rounded-start-pill pt-2 text-black fs-6">
                  Apellido
                </p>
                <p className="inputProfile bg-white fs-6 pt-2 rounded-end-pill text-black">
                  {store.currentUser?.user?.lastname}
                </p>
              </div>
              <div className="d-flex align-items-center m-0 p-0 mb-2 text-center justify-content-center  ">
                <p className="editProfile rounded-start-pill pt-2 text-black fs-6">
                  E-mail
                </p>
                <p className="inputProfile bg-white fs-6 pt-2 rounded-end-pill text-black">
                  {store.currentUser?.user?.email}
                </p>
              </div>
              <div className="d-flex align-items-center m-0 p-0 mb-2 text-center justify-content-center  ">
                <p className="editProfile rounded-start-pill pt-2 text-black fs-6">
                  Región
                </p>
                <p className="inputProfile bg-white fs-6 pt-2 rounded-end-pill text-black">
                  {store.currentUser?.user?.region}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
