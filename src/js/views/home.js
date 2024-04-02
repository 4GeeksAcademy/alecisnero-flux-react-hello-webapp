import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [agenda, setAgenda] = useState("");

  async function handlerCreateAgenda() {
    try {
      const resCreateAgenda = await fetch(
        `https://playground.4geeks.com/contact/agendas/${agenda}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (resCreateAgenda.ok) {
        const dataCreateAgenda = await resCreateAgenda.json();
        console.log(dataCreateAgenda);
        return dataCreateAgenda;
      } else if (!resCreateAgenda.ok) {
        throw new Error("El error fue: ", error);
      }
    } catch (error) {
      console.error("El error fue: ", error);
    }
  }

  async function handlerDeleteAgenda() {
    try {
      const resDeleteAgenda = await fetch(
        `https://playground.4geeks.com/contact/agendas/${agenda}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("El error fue: ", error);
    }
  }

  const readInput = (e) => {
    setAgenda(e.target.value);
  };

  return (
    <div className="text-center mt-5 d-flex">
      <h1>Registre el User de la Agenda</h1>

      <div className="d-flex flex-column">
        <div>
          <input
            type="text"
            onChange={readInput}
            placeholder="Ingrese nombre de Agenda"
          />
        </div>

        <div>
          <button className="btn btn-light ms-3" onClick={handlerCreateAgenda}>
            Create Agenda
          </button>
          <button
            className="btn btn-secondary ms-3"
            onClick={handlerDeleteAgenda}
          >
            Delete Agenda
          </button>
        </div>
      </div>

      <p>
        {agenda} {store.color}
      </p>
    </div>
  );
};
