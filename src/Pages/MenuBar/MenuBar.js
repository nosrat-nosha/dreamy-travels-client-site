import React from "react";
import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const MenuBar = () => {
	const { users, logOut } = useAuth();
	return (
		<div>
			<Navbar bg="warning" expand="lg">
				<Container>
					<Navbar.Brand href="#home">Dreamy Travels</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto ">
							<Nav.Link as={Link} className="nav-li text-white " to="/home">
								Home
							</Nav.Link>
							<Nav.Link as={Link} className="nav-li text-white" to="/services">
								Add Service
							</Nav.Link>

							{users?.email ? (
								<Nav.Link as={Link} className=" text-white" to="/aboutus">
									About Us
								</Nav.Link>
							) : (
								<Nav.Link className="d-none text-white" to="/aboutUs">
									About Us
								</Nav.Link>
							)}
							{users?.email ? (
								<Nav.Link className="nav-li text-white " to="/moreevents">
									More Events
								</Nav.Link>
							) : (
								<Nav.Link className="d-none text-white" to="about us">
									About Us
								</Nav.Link>
							)}
							{users?.email ? (
								<Nav.Link
									as={Link}
									className="nav-li text-white "
									onClick={logOut}
								>
									Log out
								</Nav.Link>
							) : (
								<Nav.Link as={Link} className="nav-li text-white " to="/login">
									Log in
								</Nav.Link>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default MenuBar;
