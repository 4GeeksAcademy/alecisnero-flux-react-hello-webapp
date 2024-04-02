import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'
import { ContactCard } from "../component/ContactCard.jsx";

export const Contact = () => {
    const { store, actions } = useContext(Context)

    return(
        <div>
            <h1>
                Los Contactos Registrado son:
            </h1>
            <ContactCard />

            <Link to="/">
                <button className="btn btn-success">
                    Back Home
                </button>
            </Link>
        </div>
    )
}