import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<div>
			<>
				<div className="header-container"></div>
				<div className="center text-white fw-bold">
					WELCOME TO DREAMY TRAVELS
					<p className="text-warning fs-6 ">
						Life is a trip,travelling is living twice
					</p>
					<Link className="btn btn-warning" to="/booknow">
						Book Now
					</Link>
				</div>
			</>
		</div>
	);
};

export default Header;
