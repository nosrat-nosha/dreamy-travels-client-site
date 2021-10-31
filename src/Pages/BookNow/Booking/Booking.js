import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Booking = () => {
	const { users } = useAuth();
	console.log(users);

	const { serviceId } = useParams();
	const [service, setService] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/services/${serviceId}`)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, []);
	// const selected = services.find((service) => service._id === serviceId);
	const handelDelete = (id) => {
		const url = `http://localhost:5000/services/${id}`;
		fetch(url, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount) {
					alert("successfully deleted");
					window.location.reload();
				}
			});
	};
	//react hook
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		axios.post("https://evil-village-67590.herokuapp.com", data).then((res) => {
			if (res.data.insertedId) {
				alert("Successfully Added");
				reset();
			}
			console.log(res);
		});
	};
	return (
		<div>
			<h2>Booking : {serviceId}</h2>
			<Row>
				<Col lg={4} sm={8} className="mx-auto">
					<Card>
						<Card.Img variant="top" src={service?.img} />
						<Card.Body>
							<Card.Title>Place Name:{service?.name}</Card.Title>
							<Card.Text>About Place{service?.description}</Card.Text>
							<Card.Text>Cost :{service?.cost}</Card.Text>
							<Card.Text>Time :{service?.time}</Card.Text>
							<Card.Text>Transport :{service?.transport}</Card.Text>
							<Button className="btn btn-warning" variant="primary">
								Update
							</Button>
							<Button
								onClick={() => handelDelete(service._id)}
								className="btn btn-warning ms-2"
								variant="primary"
							>
								Delete
							</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4} sm={8} className="mx-auto">
					<h2>User Details</h2>
					<Card>
						<Card.Img
							className="w-50 mx-auto"
							variant="top"
							src={users?.photoURL}
						/>
						<Card.Body>
							<Card.Title>User Name:{users?.displayName}</Card.Title>

							<Card.Text>Email Address :{users?.email}</Card.Text>
							<form onSubmit={handleSubmit(onSubmit)}>
								<input
									placeholder="Adress"
									required
									type="text"
									{...register("address")}
								/>
								<br />
								<input
									placeholder="age"
									required
									type="text"
									{...register("age")}
								/>
								<br />
								<textarea
									placeholder="description"
									required
									{...register("description")}
								/>
								<br />

								<br />

								<br />
								<Button className="btn btn-warning" variant="primary">
									Book Now
								</Button>
							</form>

							<Button className="btn btn-warning" variant="primary">
								Update
							</Button>
							<Button
								onClick={() => handelDelete(service._id)}
								className="btn btn-warning ms-2"
								variant="primary"
							>
								Delete
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Booking;
