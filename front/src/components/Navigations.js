import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cards from "../pages/Cards";
import Login from "../pages/Login";

const Navigations = () => {
	return (
		<Router>
			<nav>
				<ul>
					<Link to='/login'>Login</Link>
					<Link to='/cards'>Cards</Link>
				</ul>
			</nav>
			<Switch>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/cards'>
					<Cards />
				</Route>
			</Switch>
		</Router>
	);
};

export default Navigations;
