import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import { RiAccountCircleFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";


export const ContactCard = () => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate()
	const [showModal, setShowModal] = useState(false)
	const [idDelete, setIdDelete] = useState(null)

	function handleDeleteClick(sendId) {
		setShowModal(true)
		setIdDelete(sendId)
	}

	function deleteSegure() {
		actions.deleteContact(idDelete)
		navigate('/Contact')
		setShowModal(false)
	}


	return (
		<div>
			{/* Modal de confirmación de eliminación  */}

			<div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}
				id="exampleModal" tabndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Delete Contact</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							...Are you sure you want to delete this contact?
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
							<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={deleteSegure}>Delete</button>
						</div>
					</div>
				</div>
			</div>


			{(store.spinner)
				? <div className='my-5 mx-3 text-center'>
					<div className="spinner-border text-white mt-5" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
					<p className='text-white text-center'>Loading...</p>
				</div>
				: (store.contactRegistered == '')
					? <p className='text-white fs-1 text-center'>Sin contactos!</p>
					: store.contactRegistered.map((item, index) => (
						<div key={index} className='d-flex border-0 rounded mb-3 p-3 justify-content-between' style={{ backgroundColor: (index % 2 == 0 ? 'rgb(5,30,51)' : 'rgb(6,39,66)') }}>
							<div className='d-flex align-items-center text-white'>
								<div className=''>
									<img src='https://images.pexels.com/photos/11113558/pexels-photo-11113558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

										className='rounded-pill'

										style={{ width: '100px', height: '100px' }} />
								</div>

								<div className='ms-3 fs-5'>
									<p className='d-flex align-items-center'><RiAccountCircleFill /><span className='fs-4 fw-light text-center mx-2'>Name: </span> {item.name}</p>
									<p className='d-flex align-items-center'><FaPhoneAlt /><span className='fs-4 fw-light text-center mx-2'>Phone:</span>  {item.phone}</p>
									<p className='d-flex align-items-center'><MdEmail /><span className='fs-4 fw-light text-center mx-2'>Email:</span> {item.email}</p>
									<p className='d-flex align-items-center'><FaAddressCard /><span className='fs-4 fw-light text-center mx-2'>Address:</span>  {item.address}</p>
								</div>
							</div>

							<div className="d-flex h-25">
								<button className='btn btn-outline-primary btn4 rounded-end rounded-pill fs-4 border-end-0'>
									<Link to={`/UpdateContact/${item.id}`} className=' d-flex justify-content-center align-items-center'>
										<FaEdit />
									</Link></button>


								<button onClick={() => handleDeleteClick(item.id)} className='btn btn-outline-danger rounded-start rounded-pill fs-4 d-flex justify-content-center align-items-center border-start-0' data-bs-toggle="modal" data-bs-target="#exampleModal"><TiDelete /></button>

							</div>
						</div>
					))}
		</div>
	)

}


{/*
<div>
			
			<div>
				<ul>
					{store.contacts.map((item, index) => {
						return (
							<div key={index} className='d-flex border border-secondary bg-light rounded mb-3 p-3 justify-content-between'>
								<div className='d-flex align-items-center'>
									<div className=''>
										<img src='https://images.pexels.com/photos/11113558/pexels-photo-11113558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

											className='rounded-pill'

											style={{ width: '100px', height: '100px' }} />
									</div>

									<div className='ms-3'>
										<p key={item.id}><RiAccountCircleFill /> Name: {item.name}</p>
										<p key={item.id}><FaPhoneAlt /> Phone: {item.phone}</p>
										<p key={item.id}><MdEmail />Email: {item.email}</p>
										<p key={item.id}><FaAddressCard /> Address: {item.address}</p>
									</div>
								</div>

								<div>
									
									<Link to={`/UpdateContact/${item.id}`}>
										<button  className='btn btn-outline-primary rounded me-3'><FaEdit /></button>
									</Link>
									<button onClick={() => handleDeleteClick(item.id)} className='btn btn-outline-danger rounded ' data-bs-toggle="modal" data-bs-target="#exampleModal"><TiDelete /></button>
								</div>
							</div>
						)
					})}
				</ul>
			</div>

			
		</div>*/}