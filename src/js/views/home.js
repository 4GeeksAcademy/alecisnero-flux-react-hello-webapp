import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { RegisterUser } from "./RegisterUser.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  

  

  return (
    <div className="text-center mt-5 d-flex flex-column">
      <RegisterUser />
      {/* <h1>Registre el User de la Agenda</h1>

      <div className="d-flex flex-column">
        <div>
          <input
            type="text"
            onChange={readInput}
            placeholder="Ingrese nombre de Agenda"
          />
        </div>

        <div className="mt-5">
          <button
            className="btn btn-secondary ms-3"
            onClick={handlerDeleteAgenda}
          >
            Delete Agenda
          </button>
          <button className="btn btn-primary ms-3" onClick={ ()=>{ actions.createAgenda(slug) } }>
            Create Agenda
          </button>
          
        </div>
      </div>

      <p>
        {slug} {store.slug}
      </p> */}
    </div>
  );
};
