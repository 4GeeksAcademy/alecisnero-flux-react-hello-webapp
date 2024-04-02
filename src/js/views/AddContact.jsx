import React, { useState, useEffect, useContext } from 'react'

import { Context } from '../store/appContext'

import { Link } from 'react-router-dom'

export const AddContact = () => {
    const { store, actions } = useContext(Context)

    return (
        <div>
            <h1>Registrar User</h1>

            <div className='container border border-dark'>
                <form action="#" method="post">
                    <div className="mb-3">
                        <label forhtml="exampleFormControlInput1" className="form-label">Nombre:</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label forhtml="exampleFormControlInput1" className="form-label">Phone: </label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label forhtml="exampleFormControlInput1" className="form-label">Email: </label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>


                    
                </form>
            </div>


            <Link to="/">
                <button className='btn btn-success'>
                    Back Home
                </button>
            </Link>
            <Link to="/Contact">
                <button>
                    Ver Contacts
                </button>
            </Link>
        </div>


    )
}