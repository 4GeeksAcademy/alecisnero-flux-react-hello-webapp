import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'

import { IoPersonAdd } from "react-icons/io5";

export const AddContact = () => {
    const { store, actions } = useContext(Context)
    const [form, setForm] = useState()

    return (
        <div>
            <div className='container bg-light rounded p-3 mb-3'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h1>Add Contact</h1>
                    </div>
                    <div>
                        <button className='btn btn-secondary rounded'><IoPersonAdd /></button>
                    </div>
                </div>
                <form action="#" method="post">
                    <div className="mb-3">
                        <label forhtml="exampleFormControlInput1" className="form-label">Nombre:</label>
                        <input type="email" name='name' className="form-control" id="exampleFormControlInput1" placeholder="Pedro" />
                    </div>
                    <div className="mb-3">
                        <label forhtml="exampleFormControlInput1" className="form-label">Phone: </label>
                        <input type="email" name='phone' className="form-control" id="exampleFormControlInput1" placeholder="+1 000 000 000" />
                    </div>
                    <div className="mb-3">
                        <label forhtml="exampleFormControlInput1" className="form-label">Email: </label>
                        <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label forhtml="exampleFormControlInput1" className="form-label">Address: </label>
                        <input type="email" name='address' className="form-control" id="exampleFormControlInput1" placeholder="New York, Lincoln St, 9987 Manhathan" />
                    </div>
                </form>
            </div>


            <div className='d-flex justify-content-around'>
                <div>
                    <Link to="/">
                        <button className='btn btn-success'>
                            Back Home
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/Contact">
                        <button className='btn btn-light'>
                            Ver Contacts
                        </button>
                    </Link>
                </div>
            </div>
        </div>


    )
}