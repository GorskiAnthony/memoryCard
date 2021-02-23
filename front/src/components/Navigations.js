import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cards from "../pages/Cards";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Logout from "../pages/auth/Logout";

const Navigations = ({ getHeader, header }) => {
	return (
		<Router>
			<nav>
				<ul>
					<Link to='/login'>Login</Link>{" "}
					<Link to='/register'>Inscription</Link>{" "}
					<Link to='/cards'>Cards</Link>{" "}
					<Link to='/logout'>Logout</Link>
				</ul>
			</nav>
			<Switch>
				<Route path='/login'>
					<Login getHeader={getHeader} />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
				<Route path='/cards'>
					<Cards header={header} />
				</Route>
				<Route path='/logout'>
					<Logout />
				</Route>
			</Switch>
		</Router>
	);
};

export default Navigations;
