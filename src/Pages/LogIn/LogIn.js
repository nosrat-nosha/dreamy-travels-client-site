import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const LogIn = () => {
	const { signInUsingGoogle } = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || "/home";

	const handelGoogleLogin = () => {
		signInUsingGoogle().then((result) => {
			history.push(redirect_uri);
		});
	};
	return (
		<div>
			<h1>Log in</h1>
			<button onClick={handelGoogleLogin} className="btn btn-warning">
				Google Log In
			</button>
		</div>
	);
};

export default LogIn;
