import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from '../store/appContext'

export const UpdateContact = ( ) => {
    const { actions, store } = useContext(Context);
    const { contactId } = useParams(); // Obtener el ID del contacto de los parámetros de la URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState(() => {
        const contactToUpdate = store.contacts.find(contact => contact.id == contactId);
        
        if (contactToUpdate) {
            return {
                name: contactToUpdate.name,
                address: contactToUpdate.address,
                phone: contactToUpdate.phone,
                email: contactToUpdate.email
            };
        } else {
            return {
                name: '',
                address: '',
                phone: '',
                email: ''
            };
        }
    });
    
    

    useEffect(() => {
        // Obtener los detalles del contacto específico y establecer los datos en el estado local
        const contactToUpdate = store.contacts.find(contact => contact.id === contactId);
        if (contactToUpdate) {
            setFormData({
                name: contactToUpdate.name,
                address: contactToUpdate.address,
                phone: contactToUpdate.phone,
                email: contactToUpdate.email
            });
        }
    }, [contactId, store.contacts]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.getUpdateContact(formData, contactId)
        navigate('/Contact')
    }

    return (
        <div className="container card mt-4 w-50">
        <h1 className="pt-2 px-2">Update Contact</h1>
        <form className="px-2" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="FullName" className="form-label">
                    Full Name
                </label>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="FullName"
                    aria-describedby=""
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                    Email address
                </label>
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    id="Email"
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Phone" className="form-label">
                    Phone
                </label>
                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    id="Phone"
                    aria-describedby=""
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Address" className="form-label">
                    Address
                </label>
                <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="Address"
                    aria-describedby=""
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Update Contact
            </button>
        </form>
        <Link to={'/'} className="mt-2 pb-2 px-2">
            Go back to contact list
        </Link>
    </div>
    );
};