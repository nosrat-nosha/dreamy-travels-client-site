import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const BookNow = () => {
	const { serviceId } = useParams();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div>
			<h2>Book</h2>
			Book Now :{serviceId}
			<Row>
				<Col lg={8}></Col>
				<Col lg={4}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							placeholder="name"
							required
							type="text"
							{...register("name")}
						/>
						<br />
						<input
							placeholder="time"
							required
							type="date"
							{...register("time")}
						/>
						<br />
						<input
							placeholder="transport"
							required
							type="text"
							{...register("transport")}
						/>
						<br />
						<textarea
							placeholder="description"
							required
							{...register("description")}
						/>
						<br />
						<input
							placeholder="cost"
							required
							type="text"
							{...register("cost")}
						/>
						<br />

						<br />
						<input type="submit" />
					</form>
				</Col>
			</Row>
		</div>
	);
};

export default BookNow;
