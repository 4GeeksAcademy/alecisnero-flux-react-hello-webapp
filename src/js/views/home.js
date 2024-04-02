import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const Home = () => {
	const {store, actions } = useContext(Context)

	return(
		<div className="text-center mt-5">
		<h1>Contact List</h1>
		

		

		{/* <Link to="/User">
			<button>Go User</button>
		</Link> */}
		
	</div>
	)
};
