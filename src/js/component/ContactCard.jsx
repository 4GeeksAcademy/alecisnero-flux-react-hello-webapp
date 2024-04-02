import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../store/appContext'

export const ContactCard = () => {
    const { store, actions } = useContext(Context)

    return(
        <div>
            <button onClick={actions.loadContact}>
			Get agendas
		</button>

		<ul>
			{store.contacts.map( (item)=>{
				return(
					<div>
						<p key={item.id}>Name: {item.name}</p>
                        <p key={item.id}>Phone: {item.phone}</p>
                        <p key={item.id}>Email: {item.email}</p>
                        <p key={item.id}>Adress: {item.adress}</p>
					</div>
				)
			} )}
		</ul>
        </div>
    )

}