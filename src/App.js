import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuBar from "./Pages/MenuBar/MenuBar";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import AuthProvider from "./contexts/AuthProvider";
import Services from "./Pages/Services/Services";
import UpdateData from "./Pages/UpdateData/UpdateData";
import MoreEvents from "./Pages/MoreEvents/MoreEvents";
import AboutUs from "./Pages/AboutUs/AboutUs";
import BookNow from "./Pages/BookNow/BookNow";
import PrivateRoute from "./Pages/LogIn/PrivateRoute/PrivateRoute";
import Booking from "./Pages/BookNow/Booking/Booking";
import Footer from "./Pages/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<MenuBar></MenuBar>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route exact path="/home">
							<Home></Home>
						</Route>
						<Route path="/login">
							<LogIn></LogIn>
						</Route>
						<PrivateRoute path="/services">
							<Services></Services>
						</PrivateRoute>
						<Route path="/update data">
							<UpdateData></UpdateData>
						</Route>
						<Route path="/more event">
							<MoreEvents></MoreEvents>
						</Route>
						<Route path="/aboutus">
							<AboutUs></AboutUs>
						</Route>
						<Route path="/booking/:serviceId">
							<Booking></Booking>
						</Route>
						<PrivateRoute path="/booknow">
							<BookNow></BookNow>
						</PrivateRoute>
						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
					<Footer></Footer>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
