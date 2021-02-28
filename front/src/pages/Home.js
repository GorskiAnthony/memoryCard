import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../images/home.jpg";
import axios from "axios";
import { url } from "../const.json";
import CountUp from "react-countup";

const Home = () => {
	const [nbCard, setNbCard] = useState(0);
	const [nbUser, setNbUser] = useState(0);

	function getUser() {
		return axios.get(`${url.API}/api/user/counts`);
	}

	function getCard() {
		return axios.get(`${url.API}/api/cards/counts`);
	}
	Promise.all([getUser(), getCard()]).then((results) => {
		const user = results[0];
		const card = results[1];
		setNbUser(user.data);
		setNbCard(card.data);
	});
	return (
		<section className='text-gray-600 body-font'>
			<div className='container mx-auto flex px-5 py-20 md:flex-row flex-col items-center'>
				<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
						Memory Cards
						<br className='hidden lg:inline-block' />
					</h1>
					<p className='leading-relaxed'>
						Memory box permet de retenir sous forme de cartes, plein
						d'informations qui peuvent aller de votre numéro de
						sécurité sociale à la vitesse de la lumière en passant
						par le traité de Versailles !
					</p>

					<div className='container px-5 py-8 mx-auto'>
						<div className='flex flex-wrap -m-4 text-center'>
							<div className='p-4 sm:w-1/2 w-1/2'>
								<h2 className='title-font font-medium sm:text-4xl text-3xl text-gray-900'>
									<CountUp end={nbUser} />
								</h2>
								<p className='leading-relaxed'>Utilisateurs</p>
							</div>
							<div className='p-4 sm:w-1/2 w-1/2'>
								<h2 className='title-font font-medium sm:text-4xl text-3xl text-gray-900'>
									<CountUp end={nbCard} />
								</h2>
								<p className='leading-relaxed'>
									Cartes retenues
								</p>
							</div>
						</div>
					</div>

					{localStorage.getItem("login") ? (
						""
					) : (
						<div className='flex justify-center'>
							<Link
								className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
								to='/register'
							>
								S'inscrire
							</Link>
							<Link
								className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'
								to='/login'
							>
								Se connecter
							</Link>
						</div>
					)}
				</div>

				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
					<img
						className='object-cover object-center rounded'
						alt='hero'
						src={img}
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
