import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'

import { IoPersonAdd } from "react-icons/io5";

export const AddContact = () => {
    const { store, actions } = useContext(Context)
    const [form, setForm] = useState( {
        name: '',
        phone: '',
        email: '',
        address: '',
    } )

    function handlerChangeForm(even) {
        const { name, value } = even.target

        setForm( (prevState)=> ({
            ...prevState, [name]: value
        }) )
    }

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
                        <input type="text" name='name' value={form.name} className="form-control" id="exampleFormControlInput1" placeholder="Pedro" />
                    </div>
                    <div className="mb-3">
                        <label forhtml="exampleFormControlInput1" className="form-label">Phone: </label>
                        <input type="nunber" name='phone' value={form.phone} className="form-control" id="exampleFormControlInput1" placeholder="+1 000 000 000" />
                    </div>
                    <div className="mb-3">
                        <label forhtml="exampleFormControlInput1" className="form-label">Email: </label>
                        <input type="email" name='email' value={form.email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label forhtml="exampleFormControlInput1" className="form-label">Address: </label>
                        <input type="text" name='address' value={form.address} className="form-control" id="exampleFormControlInput1" placeholder="New York, Lincoln St, 9987 Manhathan" />
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