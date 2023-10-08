import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/registerBook.css";

const RegisterBook = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="container contenedor-bookRegister d-flex my-3  p-0">
      <img src="https://images.unsplash.com/photo-1564316915543-b36a51db1a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
      <form
        className="form-control shadow form-register-book p-3"
        onSubmit={(e) => {
          actions.submitBookImage(e, navigate);
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Titulo
          </label>
          <input
            type="text"
            className="form-control input-register-book"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Ingresa el titulo"
            required
            name="title"
            value={store.title}
            onChange={actions.inputBookValue}
          />
          <label htmlFor="author" className="form-label">
            Autor
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            aria-describedby="emailHelp"
            placeholder="Ingresa el autor"
            required
            name="author"
            value={store.author}
            onChange={actions.inputBookValue}
          />
          <label htmlFor="cathegory" className="form-label">
            Categoria
          </label>
          <input
            type="text"
            className="form-control"
            id="cathegory"
            aria-describedby="emailHelp"
            placeholder="Ingresa la categoria"
            required
            name="cathegory"
            value={store.cathegory}
            onChange={actions.inputBookValue}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="number_of_pages" className="form-label">
            Numero de páginas
          </label>
          <input
            type="text"
            className="form-control"
            id="number_of_pages"
            placeholder="Numero de páginas"
            required
            name="number_of_pages"
            value={store.number_of_pages}
            onChange={actions.inputBookValue}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="description" className="form-label">
            Descripción
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Descripción"
            required
            name="description"
            value={store.description}
            onChange={actions.inputBookValue}
          />
        </div>
        <div className="mb-1 "></div>
        <div className="mb-1 ">
          <label htmlFor="photo" className="form-label">
            Foto
          </label>
          <input
            type="file"
            className="form-control"
            id="photo"
            placeholder="Ingresa foto"
            name="photo"
            onChange={(e) => actions.inputBookImage(e.target.files[0])}
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="type" className="form-label">
            Tipo
          </label>
          <select
            className="form-select"
            id="type"
            required
            name="type"
            value={store.type.toString()}
            onChange={actions.inputBookValue}
            multiple={false}
          >
            <option value="">Seleccionar tipo de transacción</option>
            <option value="Venta">Venta</option>
            <option value="Intercambio">Intercambio</option>
            <option value="Donación">Donación</option>
          </select>
        </div>
        <label htmlFor="price" className="form-label">
          Precio
        </label>
        <input
          type="text"
          className="form-control"
          id="price"
          placeholder="Ingresa precio"
          required
          name="price"
          value={store.price}
          onChange={actions.inputBookValue}
        />
        <button type="" className="btn boton my-3">
          Publicar
        </button>
      </form>
    </div>
  );
};
export default RegisterBook;
