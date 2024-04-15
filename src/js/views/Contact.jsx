import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'
import { ContactCard } from "../component/ContactCard.jsx";

import { GoHome } from "react-icons/go";
import { IoAddCircleOutline } from "react-icons/io5";

export const Contact = () => {
    const { store, actions } = useContext(Context)


    return (
        <div className='container'>
            <div className='title editCaja p-2 fs-5 mt-3 text-center d-flex justify-content-between align-items-center' style={{ backgroundColor: 'rgb(20,132,224)' }}>
                <div>
                    <h1 className='fs-3 text-white'>Contactos Registrados</h1>
                </div>
                <div className="d-flex">
                   
                    <div className='editCaja3 my-2'>
                        <Link to="/">
                            <button className="btn btn-secondary rounded-end rounded-pill fs-3 px-5 text-white d-flex justify-content-center align-items-center">
                                <GoHome />
                            </button>
                        </Link>
                    </div> 
                    <div className='editCaja3 my-2'>
                        <Link to="/AddContact">
                            <button className="btn rounded-start rounded-pill fs-3 px-5 text-white d-flex justify-content-center align-items-center" style={{backgroundColor: 'rgb(9,51,88)'}}><IoAddCircleOutline/></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='editCaja2  p-3' style={{ backgroundColor: 'rgb(9,51,88)', height: '80vh', maxHeight: '80vh', overflowY: 'auto' }}>
                <ContactCard />
            </div>
        </div>
    )
}