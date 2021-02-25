import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cards from "../pages/cards/Cards";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Logout from "../pages/auth/Logout";
import Home from "../pages/Home";
import img from "../images/logo_memory.svg";
import PostCard from "../pages/cards/PostCard";

const Navigations = ({ getHeader, header }) => {
	return (
		<Router>
			<header className='text-gray-600 body-font'>
				<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
					<Link
						className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
						to='/'
					>
						<img src={img} alt='logo memory box' width='50px' />

						<span className='ml-3 text-xl'>Memory Cards</span>
					</Link>
					<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
						<Link to='/login' className='mr-5 hover:text-gray-900'>
							Login
						</Link>
						<Link
							to='/register'
							className='mr-5 hover:text-gray-900'
						>
							Inscription
						</Link>
						<Link to='/cards' className='mr-5 hover:text-gray-900'>
							Cards
						</Link>
						<Link
							to='/postCard'
							className='mr-5 hover:text-gray-900'
						>
							Add Card
						</Link>
						<Link to='/logout' className='mr-5 hover:text-gray-900'>
							Logout
						</Link>
					</nav>
				</div>
			</header>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route
					path='/postCard'
					component={(props) => <PostCard {...props} />}
				/>
				<Route
					path='/login'
					component={(props) => (
						<Login {...props} getHeader={getHeader} />
					)}
				/>
				<Route
					path='/register'
					component={(props) => <Register {...props} />}
				/>
				<Route
					path='/cards'
					component={(props) => <Cards {...props} header={header} />}
				/>

				<Route path='/logout'>
					<Logout />
				</Route>
			</Switch>
		</Router>
	);
};

export default Navigations;
