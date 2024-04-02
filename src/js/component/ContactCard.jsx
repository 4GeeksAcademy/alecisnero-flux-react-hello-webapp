import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'

import { RiAccountCircleFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";


export const ContactCard = () => {
	const { store, actions } = useContext(Context)

	return (
		<div>
			<div>
				<ul>
					{store.contacts.map((item) => {
						return (
							<div className='d-flex border border-dark rounded mb-3 p-3 justify-content-between'>
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
									<button className='btn btn-outline-primary rounded me-3'><IoPersonAdd /></button>
									<button className='btn btn-outline-danger rounded'><TiDelete /></button>
								</div>
							</div>
						)
					})}
				</ul>
			</div>

			
		</div>
	)

}