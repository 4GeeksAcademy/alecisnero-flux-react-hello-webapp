import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Context } from '../store/appContext'
import { element } from 'prop-types'

export const RegisterUser = () => {
    const { store, actions } = useContext(Context)
    const [slug, setSlug] = useState("");
    const [saveSlug, setSaveSlug] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        actions.getRegisterUser()
    }, [])

    const readInput = (e) => {
        setSlug(e.target.value);
    };

    function handlerSaveSlug() {
        if (slug !== '' && slug !== saveSlug) {
            setSaveSlug([...saveSlug, slug])
            actions.createUser(slug)
            setSlug('')
        } else {
            alert('Campo vacio')
        }

    }

    function handlerClickUser(userName) {
        actions.getUserRegistered(userName)
        navigate('/Contact')
    }

    function handlerDeleteUser(UserDel) {
        actions.deleteUser(UserDel)
    }

    function handlerSendUser(slugServer) {
        handlerClickUser(slugServer)
        actions.getSlug(slugServer)
    }



    return (
        <div className='d-flex justify-content-center fs-5'>
            <div className='col-5'>
                <div className='position-relative text-white rounded p-3 mx-3' style={{ backgroundColor: 'rgb(9,51,88)', minHeight: '80vh' }}>
                    <div className='w-100 position-absolute top-0 start-0 rounded-top bg-danger p-1'>
                        <h4>User Created History</h4>
                    </div>
                    <div className='position-relative my-5 '>
                        <input type="text" onChange={readInput}
                            className='border-0 rounded-start p-2 my-2 w-75'
                            value={slug}
                            placeholder='Ingrese su USER' />
                        <button className='border-0 px-3 rounded-end p-2  text-white' onClick={handlerSaveSlug} style={{ backgroundColor: 'rgb(37,140,232)' }}>Add User</button>
                    </div>
                    <div className=' mt-3'>

                        {saveSlug.map((item, index) => (
                            <div key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className='col-5'>
                <div className='position-relative text-white rounded p-3 mx-3' style={{ backgroundColor: 'rgb(9,51,88)' }}>
                    <div className='w-100 position-absolute top-0 start-0 rounded-top bg-danger p-1'>
                        <h4>Registered Users</h4>
                    </div>

                    {(!store.spinner)
                        ? <div className='mt-5 position-relative '>
                            {store.saveUserCurrent.map((element) => (
                            <div key={element.id}>
                                <div className='rounded-2 d-flex justify-content-between align-items-center my-2 py-2 ps-2 pe-0 position-relative' style={{backgroundColor: (element.id % 2 == 0 ? 'rgb(5,30,51)' : 'rgb(6,39,66)')}}>
                                    <div className=" rounded-2">
                                        <a onClick={() => handlerSendUser(element.slug)} className='text-decoration-none text-white m-3' style={{cursor: 'pointer'}}>
                                            {element.slug}
                                        </a>
                                    </div>
                                    <div className="rounded-2 position-absolute top-0 end-0">
                                        <button className='p-3 bg-danger py-2 px-3 border-0 rounded-end text-white' onClick={() => handlerDeleteUser(element.slug)}>del</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                        : <div className='my-5 mx-3'>
                            <div className="spinner-border text-white mt-5" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className='text-white'>Loading...</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}