import React from "react";
import "./About.css";
import user from "../images/user.png";
import { Card, CardGroup } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const AboutUs = () => {
	return (
		<div>
			<div className="about-container">
				<div className="row">
					<div className="col-lg-8 mx-auto mt-5 pt-5 text-white">
						<h2>Travel Whole World With Us</h2>
						<p className="text-warning">
							Travel is the movement of people between distant geographical
							locations
						</p>
						<Button className="btn btn-warning text-white btn-lg">
							See More
						</Button>
					</div>
				</div>
			</div>
			<div className="team-container">
				<h2 className="p-5 text-warning">Our Team Members</h2>
				<CardGroup className="bg-warning p-5 g-4 shadow-lg">
					<Card>
						<Card.Img variant="top" className="w-50 mx-auto p-3" src={user} />
						<Card.Body>
							<Card.Title>Founder</Card.Title>
							<Card.Text>Name: Adam Smith</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" className="w-50 mx-auto p-3" src={user} />
						<Card.Body>
							<Card.Title>Co-Founder</Card.Title>
							<Card.Text>Name: juliana smith</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" className="w-50 mx-auto p-3" src={user} />
						<Card.Body>
							<Card.Title>Manager</Card.Title>
							<Card.Text>Name: wiliam Hary</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
				<hr />
			</div>
		</div>
	);
};

export default AboutUs;
