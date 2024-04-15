import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="text-white px-3 py-3 d-flex justify-content-between" style={{ backgroundColor: 'rgb(9,51,88)'}}>
			<div>
			<Link to="/">
				<p className="text-white text-decoration-none fs-3 fw-bold">CONTACT LIST</p>
			</Link>
			</div>
			<div>
				<span className={`d-flex align-items-center fs-3 fw-bold mx-3 ${(store.slug == '') ? 'd-none' : ''}`}>
					<p className="fs-5 fw-light my-3 mx-3">Welcome, User: </p>{store.slug}
				</span>
			</div>
		</div>
	);
};
