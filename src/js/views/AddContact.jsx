import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

import { GrFormPreviousLink } from "react-icons/gr";
import { GoHome } from "react-icons/go";
import { IoAddCircleOutline } from "react-icons/io5";

export const AddContact = () => {
    const { store, actions } = useContext(Context)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const navigate = useNavigate();

    const handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))

    };
    
    function handlerCreateContact(e) {
        e.preventDefault();
        if (formData.name !== '' && formData.email !== '' && formData.phone !== '' && formData.address !== '') {
            actions.createContact(formData)
            navigate('/Contact')
        } else {
            alert('No debe dejar ningun campo vacio ')
        }

    }


    return (
        <div className="container mt-4 w-50">
            <div className='editCaja d-flex justify-content-start p-2 mx-3 mt-0 title' style={{ backgroundColor: 'rgb(20,132,224)' }}>
                <div className='d-flex align-items-center w-100'>
                    <div className='w-auto'>
                        <h4 className='fs-3 text-white mx-3'>Add New contact</h4>
                    </div>

                    <div className=' editCajaBtn d-flex justify-content-end fs-3'>

                        <button className="btn3 px-2 ">
                            <Link to='/Contact' className='text-decoration-none text-white  d-flex align-items-center justify-content-center fs-3 py-2'><GrFormPreviousLink /></Link>
                        </button>


                        <button className='btn2 px-2'>
                            <Link to="/" className='text-decoration-none text-white  d-flex align-items-center justify-content-center fs-3 py-2' ><GoHome /></Link>
                        </button>

                        <button onClick={handlerCreateContact} className="btn1 px-2  text-white  d-flex align-items-center justify-content-center fs-3 py-2">
                            <IoAddCircleOutline />
                        </button>
                    </div>
                </div>
            </div>

            <div className='text-white editCaja2 p-3 mx-3' style={{ backgroundColor: 'rgb(9,51,88)', height: '80vh' }}>
                <form className="px-2" onSubmit={handlerCreateContact}>
                    <div className="mb-5 mt-5 d-flex rounded-start align-items-center editInput" style={{ backgroundColor: 'rgb(20,132,224)' }}>
                        <label htmlFor="FullName" className="col-2 form-label fs-5 ms-3 my-1">
                            Full Name
                        </label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            className="form-control editInput"
                            id="FullName"
                            aria-describedby=""
                        />
                    </div>
                    <div className="mb-5 mt-5 d-flex rounded-start align-items-center editInput" style={{ backgroundColor: 'rgb(20,132,224)' }}>
                        <label htmlFor="Email" className="col-2 form-label fs-5 ms-3 my-1">
                            Email address
                        </label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            className="form-control editInput"
                            id="Email"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-5 mt-5 d-flex rounded-start align-items-center editInput" style={{ backgroundColor: 'rgb(20,132,224)' }}>
                        <label htmlFor="Phone" className="col-2 form-label fs-5 ms-3 my-1">
                            Phone
                        </label>
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="number"
                            className="form-control editInput"
                            id="Phone"
                            aria-describedby=""
                        />
                    </div>
                    <div className="mb-5 mt-5 d-flex rounded-start align-items-center  editInput" style={{ backgroundColor: 'rgb(20,132,224)' }}>
                        <label htmlFor="Address" className="col-2 form-label fs-5 ms-3 my-1">
                            Address
                        </label>
                        <input
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            type="text"
                            className="col form-control editInput"
                            id="Address"
                            aria-describedby=""
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}