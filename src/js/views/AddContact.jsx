import React, { useState, useEffect, useContext } from 'react'

import { Context } from '../store/appContext'

import { Link } from 'react-router-dom'

export const AddContact = () => {
    const { store, actions } = useContext(Context)

    return(
        <div>
            <h1>Registrar User</h1>

            <div className='container border border-dark'>
                <form action="#" method="post">
                    <input type="text" name='name' placeholder='Name' />

                    <input type="text" name='phone' placeholder='Phone' />

                    <input type="text" name='email' placeholder='Email' />

                    <input type="text" name='adress' placeholder='Adress' />
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