import React from "react";
import { Alert, Col, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
	return (
		<div>
			<hr />
			<div className="container-fluid  py-5">
				<Row>
					<Col lg={4}>
						<div className="">
							<h4>Dreamy Travels</h4>
							<p className="text-muted">
								Travel is the movement of people between distant geographical
								locations
							</p>
							<p className="  ">
								<i class="fas fa-phone-alt text-warning  "></i>
								<p className="">012123-134-13</p>
								<i class="fas fa-map-marker-alt text-warning"></i>
								<p className="">Dhaka,Bangladesh</p>
								<i class="fas fa-envelope text-warning"></i>
								<p className="">dreamy.travels@gmail.com</p>
							</p>
						</div>
					</Col>
					<Col lg={4}>
						<div className=" ">
							<h4>Links</h4>
							<Alert.Link className="text-warning " href="#">
								Home
							</Alert.Link>
							<br />
							<Alert.Link className="text-warning mt-3" href="#">
								Services
							</Alert.Link>
							<br />
							<Alert.Link className="text-warning mt-3" href="#">
								About Us
							</Alert.Link>
							<br />
							<Alert.Link className="text-warning mt-3" href="#">
								Log In
							</Alert.Link>
						</div>
					</Col>
					<Col lg={4}>
						<div className="">
							<h4>Follow Us</h4>
							<p className="text-muted">Follow us to know more about us</p>
							<hr />

							<p className="  ">
								<i class="fab fa-facebook-f text-warning p-2"></i>

								<i class="fab fa-instagram text-warning p-2"></i>

								<i class="fab fa-youtube text-warning p-2"></i>
								<i class="fab fa-linkedin text-warning p-2"></i>
							</p>
						</div>
					</Col>
					<hr />
					<p className="mx-auto">
						{" "}
						&copy; 2021 Dreamy Travels, All Rights Reserved
					</p>
				</Row>
			</div>
		</div>
	);
};

export default Footer;
