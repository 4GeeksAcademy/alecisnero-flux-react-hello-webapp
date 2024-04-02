import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'
import { ContactCard } from "../component/ContactCard.jsx";

export const Contact = () => {
    const { store, actions } = useContext(Context)

    return (
        <div className='container'>
            <div className='border border-light rounded'>
                <h1>
                    Los Contactos Registrado son:
                </h1>
            </div>
            <ContactCard />

            <div className='d-flex justify-content-around'>
                <div>
                    <Link to="/">
                        <button className="btn btn-success">
                            Back Home
                        </button>
                    </Link>
                </div>
                <div>
                    <button className='btn btn-light' onClick={() => actions.loadContact()}>
                        Get agendas
                    </button>
                </div>
            </div>
        </div>
    )
}