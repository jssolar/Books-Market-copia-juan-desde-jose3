import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/bookDetails.css";
import "../../styles/profile.css";

export const MySaleBookDetails = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar si estamos en modo edición
  const [editedBook, setEditedBook] = useState({}); // Estado para mostar los datos del libro

  useEffect(() => {
    actions.getOneBook(id);
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
    // Inicializamos el objeto de libro editado con los valores actuales del libro
    setEditedBook({
      title: store.oneBook?.title,
      author: store.oneBook?.author,
      description: store.oneBook?.description,
      cathegory: store.oneBook?.cathegory,
      number_of_pages: store.oneBook?.number_of_pages,
      price: store.oneBook?.price,
    });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    actions.updateBook(id, editedBook, navigate);
    // Desactiva el modo de edición
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  const handleDeleteClick = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este libro?")) {
      actions.deleteBook(id, navigate);
    }
  };

  return (
    <div className="background-target container-fluid d-flex justify-content-center pb-3">
      <div
        className="target d-flex ms-4 mt-3 shadow-lg px-5 py-3 rounded-4"
        style={{ width: "1150px" }}
      >
        <div className="mb-0 pb-0" style={{ width: "300px", height: "100%" }}>
          <img
            src={store.oneBook?.photo}
            className="shadow-sm border rounded-4"
            alt="Hollywood Sign on The Hill"
            style={{ width: "100%", height: "400px" }}
          />
          <Link
            to={`/otherProfile/${store.oneBook?.user_id}`}
            className="ms-0"
            onClick={(e) => {
              actions.getOtherBooks(store.oneBook?.user_id);
            }}
          >
            <div className="d-flex mt-2 ms-0 rounded-5 shadow seller-grad">
              <div>
                <img
                  src={store.oneBook?.user?.userImage}
                  className="card-img-top shadow rounded-circle mt-1 ms-2"
                  alt="Hollywood Sign on The Hill"
                  style={{ width: "70px", height: "70px" }} // Asegura que el ancho y el alto sean iguales
                />
              </div>
              <div className="mt-3 ms-3 ">
                <p className="text-white mb-0 fw-medium">
                  {store.oneBook?.user?.name} {store.oneBook?.user?.lastname}{" "}
                </p>
                <p className="text-white mb-3">Vendido por</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-5 ms-5 mb-5" style={{ width: "1000px" }}>
          {isEditing ? (
            // Modo de edición
            <div>
              <form>
                <div className="d-flex align-items-center mb-3 m-0 p-0 text-center justify-content-start">
                  <label
                    htmlFor="title"
                    className="form-label m-0 p-0 pt-2 editProfile rounded-start-pill text-black fs-6"
                  >
                    Título
                  </label>
                  <input
                    type="text"
                    className="form-control m-0 p-0 ps-3 inputProfile bg-white fs-6 rounded-end-pill text-black"
                    id="title"
                    name="title"
                    value={editedBook.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex align-items-center mb-3 m-0 p-0 text-center justify-content-start">
                  <label
                    htmlFor="author"
                    className="form-label m-0 p-0 pt-2 editProfile rounded-start-pill text-black fs-6"
                  >
                    Autor
                  </label>
                  <input
                    type="text"
                    className="form-control m-0 p-0 ps-3 inputProfile bg-white fs-6 rounded-end-pill text-black"
                    id="author"
                    name="author"
                    value={editedBook.author}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex align-items-center mb-3 m-0 p-0 text-center justify-content-start">
                  <label
                    htmlFor="description"
                    className="form-label m-0 p-0 pt-2 editProfile rounded-start-pill text-black fs-6"
                  >
                    Descripción
                  </label>
                  <input
                    type="text"
                    className="form-control m-0 p-0 ps-3 inputProfile bg-white fs-6 rounded-end-pill text-black"
                    id="description"
                    name="description"
                    value={editedBook.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex align-items-center mb-3 m-0 p-0 text-center justify-content-start">
                  <label
                    htmlFor="cathegory"
                    className="form-label m-0 p-0 pt-2 editProfile rounded-start-pill text-black fs-6"
                  >
                    Categoría
                  </label>
                  <input
                    type="text"
                    className="form-control m-0 p-0 ps-3 inputProfile bg-white fs-6 rounded-end-pill text-black"
                    id="cathegory"
                    name="cathegory"
                    value={editedBook.cathegory}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex align-items-center mb-3 m-0 p-0 text-center justify-content-start">
                  <label
                    htmlFor="number_of_pages"
                    className="form-label m-0 p-0 pt-2 editProfile rounded-start-pill text-black fs-6"
                  >
                    Número de Páginas
                  </label>
                  <input
                    type="number"
                    className="form-control m-0 p-0 ps-3 inputProfile bg-white fs-6 rounded-end-pill text-black"
                    id="number_of_pages"
                    name="number_of_pages"
                    value={editedBook.number_of_pages}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex align-items-center mb-3 m-0 p-0 text-center justify-content-start">
                  <label
                    htmlFor="price"
                    className="form-label m-0 p-0 pt-2 editProfile rounded-start-pill text-black fs-6"
                  >
                    Precio
                  </label>
                  <input
                    type="number"
                    className="form-control m-0 p-0 ps-3 inputProfile bg-white fs-6 rounded-end-pill text-black"
                    id="price"
                    name="price"
                    value={editedBook.price}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
              <button className="btn btn-success" onClick={handleSaveClick}>
                Guardar
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={handleCancelClick}
              >
                Cancelar
              </button>
            </div>
          ) : (
            // Modo de vista
            <div className="">
              <div className="d-flex align-items-center m-0 p-0 mb-1 text-center justify-content-start">
                <p className="editProfile rounded-start-pill pt-2 text-black fs-6">
                  Titulo
                </p>
                <p className="inputProfile bg-white fs-6 pt-2 rounded-end-pill text-black">
                  {store.oneBook?.title}
                </p>
              </div>
              <div className="d-flex align-items-center m-0 p-0 mb-1 text-center justify-content-start">
                <p className="editProfile rounded-start-pill pt-2 text-black fs-6">
                  Autor
                </p>
                <p className="inputProfile bg-white fs-6 pt-2 rounded-end-pill text-black">
                  {store.oneBook?.author}
                </p>
              </div>
              <div className="d-flex align-items-center m-0 p-0 mb-1 text-center justify-content-start">
                <p className="editProfile rounded-start-pill pt-2 text-black fs-6">
                  Descripción
                </p>
                <p className="inputProfile largeText bg-white fs-6 pt-2 rounded-end-pill text-black">
                  {store.oneBook?.description}
                </p>
              </div>
              <div className="d-flex align-items-center m-0 p-0 mb-1 text-center justify-content-start">
                <p className="editProfile rounded-start-pill pt-2 text-black fs-6">
                  Categoría
                </p>
                <p className="inputProfile bg-white fs-6 pt-2 rounded-end-pill text-black">
                  {store.oneBook?.cathegory}
                </p>
              </div>
              <div className="d-flex align-items-center m-0 p-0 mb-1 text-center justify-content-start">
                <p className="editProfile rounded-start-pill pt-2 text-black fs-6">
                  Número de Páginas
                </p>
                <p className="inputProfile bg-white fs-6 pt-2 rounded-end-pill text-black">
                  {store.oneBook?.number_of_pages}
                </p>
              </div>
              <div className="d-flex align-items-center m-0 p-0 mb-1 text-center justify-content-start">
                <p className="editProfile rounded-start-pill pt-2 text-black fs-6">
                  Precio
                </p>
                <p className="inputProfile bg-white fs-6 pt-2 rounded-end-pill text-black">
                  {store.oneBook?.price}
                </p>
              </div>
            </div>
          )}
          <div className="mt-4">
            {isEditing ? (
              <></>
            ) : (
              <div>
                <button
                  type="button"
                  className="btn btn-primary me-3"
                  onClick={handleEditClick}
                >
                  Editar
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDeleteClick}
                >
                  Eliminar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
