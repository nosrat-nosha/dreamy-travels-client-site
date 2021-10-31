import axios from "axios";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
const Services = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		axios
			.post("https://evil-village-67590.herokuapp.com/services", data)
			.then((res) => {
				if (res.data.insertedId) {
					alert("Successfully Added");
					reset();
				}
				console.log(res);
			});
	};

	return (
		<div>
			<h4 className="p-5 text-warning">ADD A NEW SERVICE</h4>
			<hr />
			<Row>
				<Col lg={8} sm={12} className="mx-auto">
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							className="form-control"
							placeholder="name"
							required
							type="text"
							{...register("name")}
						/>
						<br />
						<input
							className="form-control"
							placeholder="time"
							required
							type="date"
							{...register("time")}
						/>
						<br />
						<input
							className="form-control"
							placeholder="transport"
							required
							type="text"
							{...register("transport")}
						/>
						<br />
						<textarea
							className="form-control"
							placeholder="description"
							required
							{...register("description")}
						/>
						<br />
						<input
							className="form-control"
							placeholder="cost"
							required
							type="text"
							{...register("cost")}
						/>
						<br />
						<input
							className="form-control"
							placeholder="import image url"
							required
							type="text"
							{...register("img")}
						/>
						<br />
						<input className="btn btn-warning text-white mt-5" type="submit" />
					</form>
				</Col>
			</Row>
			<hr />
		</div>
	);
};

export default Services;
