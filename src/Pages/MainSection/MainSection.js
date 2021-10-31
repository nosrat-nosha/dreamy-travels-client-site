import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import "./MainSection.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import bg1 from "../images/bg1.jpg";
import selfGuide from "../images/plane.png";
import adventurer from "../images/adventurer.png";
import adventure from "../images/adventure.png";
import seaside from "../images/seaside.png";
import { Link } from "react-router-dom";

const MainSection = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/services`)
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<div>
			{/* =====================SECTION-1=====================*/}
			<div className="container-fluid p-5">
				<h2>Oue Travel Spot</h2>
				<Row className="gx-5 gy-5 mt-5">
					{services?.map((service) => (
						<Col lg="6" sm="12" key={service.id} service={service}>
							<Card>
								<div className="img-container ">
									<Card.Img
										className="card-img"
										variant="top"
										src={service.img}
									/>
									<div className="middle">
										<Link
											className="btn btn-warning text"
											to={`/booking/${service._id}`}
										>
											Book now
										</Link>
									</div>
								</div>
								{/* <Card.Img
									className="card-img"
									variant="top"
                                    src={service.img}
                                    
								/> */}
								<Card.Body>
									<Card.Title>{service.name}</Card.Title>
									<Card.Text>{service.description}</Card.Text>
									<Card.Title className="text-muted">
										Travel Time:{service.time}
									</Card.Title>
								</Card.Body>
								<Card.Footer className="bg-warning">
									<Link
										className="fw-bold text-white"
										to={`/booking/${service._id}`}
									>
										BooK Now
									</Link>
								</Card.Footer>
							</Card>
						</Col>
					))}
				</Row>
			</div>

			{/* =====================SECTION-2=====================*/}
			<div className="container-fluid ">
				<Row className="">
					<Col lg="5 p-4">
						<div className="">
							<h1 className="title-text">A Simply Perfect Place To Get Lost</h1>
							<p className=" text-muted fs-4">
								Treat yourself with a journey to your inner self. Visit a
								mystique Tibet and start your spiritual adventure. We promise,
								you’ll enjoy every step you make.
							</p>
						</div>
					</Col>
					<Col lg="6 text-white">
						<div className="">
							<Carousel fade>
								<Carousel.Item>
									<img
										className="d-block img-fluid"
										src={img3}
										alt="First slide"
									/>
									<Carousel.Caption className="text-white">
										<h3>Be A Travelers</h3>
										<p>
											“Travel makes one modest. You see what a tiny place you
											occupy in the world.” ― Gustave Flaubert
										</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block img-fluid"
										src={img2}
										alt="Second slide"
									/>

									<Carousel.Caption>
										<h3>Be A Travelers</h3>
										<p>
											“See the world. It's more fantastic than any dream made or
											paid for in factories. Ask for no guarantees, ask for no
											security.” ― Ray Bradbury, Fahrenheit 451
										</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block img-fluid"
										src={img4}
										alt="Third slide"
									/>

									<Carousel.Caption>
										<h3>Be A Travelers</h3>
										<p>
											“Twoflower was a tourist, the first ever seen on the
											discworld. Tourist, Rincewind had decided, meant 'idiot'.”
											― Terry Pratchett, The Color of Magic
										</p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</div>
					</Col>
				</Row>
			</div>
			{/* =====================SECTION-3=====================*/}
			<div className="container-three mt-5 p-5">
				<Row>
					<div className=" ">
						<h2 className="text-white">CHOOSE TOUR</h2>
					</div>
					<p className="text-white mt-4 fs-5">
						Find your next travel adventure and make it memorable. Explore
						wildlife, enjoy <br /> seaside or book a cruise tour. Check out our
						popular destinations.
					</p>
				</Row>
				<Row className="mt-3">
					<Col lg={3}>
						<div className=" text-white">
							<div className="img p-3">
								<img
									className="img-fluid w-25 mb-3 text-white "
									src={selfGuide}
									alt=""
								/>
							</div>
							<h4 className="mt-4">Self-Guided</h4>
						</div>
					</Col>
					<Col lg={3}>
						<div className="text-white">
							<div className="img p-3">
								<img className="img-fluid w-25 mb-3" src={adventurer} alt="" />
							</div>
							<h4 className="mt-4">Adventure</h4>
						</div>
					</Col>
					<Col lg={3}>
						<div className="text-white  ">
							<div className=" img p-3 ">
								<img className="img-fluid w-25 mb-3" src={adventure} alt="" />
							</div>
							<h4 className="mt-4">Wildlife</h4>
						</div>
					</Col>
					<Col lg={3}>
						<div className="text-white">
							<div className="img">
								<img className="img-fluid w-25 mb-3" src={seaside} alt="" />
							</div>
							<h4 className="mt-4">Seaside</h4>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default MainSection;
