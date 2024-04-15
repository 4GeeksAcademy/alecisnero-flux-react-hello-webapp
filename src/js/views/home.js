import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { RegisterUser } from "./RegisterUser.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  

  

  return (
    <div className="text-center mt-3 d-flex flex-column">
      <RegisterUser />
    </div>
  );
};
