import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const User = () => {
    const {store, actions} = useContext(Context)

    return(
        <div>
            <h1>Contact List2</h1>

            <Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
        </div>
    )
}