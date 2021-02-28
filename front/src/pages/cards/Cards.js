import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import { url } from "../../const.json";

const Cards = ({ history }) => {
	const API = url.API;
	const [cards, setCards] = useState([]);
	const header = localStorage.getItem("header");

	useEffect(() => {
		async function getData() {
			try {
				// success 🎉
				const response = await axios.get(`${API}/api/cards`, {
					headers: {
						"auth-token": header,
					},
				});
				setCards(response.data);
			} catch (error) {
				// error 😱
				if (error.response) {
					console.log(error.response);
					/*
					 * The request was made and the server responded with a
					 * status code that falls out of the range of 2xx
					 */
					history.push("/login");
					console.warn("Status code : " + error.response.status);
				} else if (error.request) {
					/*
					 * The request was made but no response was received, `error.request`
					 * is an instance of XMLHttpRequest in the browser and an instance
					 * of http.ClientRequest in Node.js
					 */
					console.warn("Error request : " + error.request);
				} else {
					// Something happened in setting up the request and triggered an Error
					console.error("Error", error.message);
				}
				console.error(error);
			}
		}
		// Add a response interceptor

		getData();
	}, []);

	const showCard = () => {
		return cards.map((card, i) => <Card key={i + 1} content={card} />);
	};

	return (
		<div className='container px-5 mx-auto'>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-16 mx-auto'>
					{Object.keys(cards).length === 0 ? (
						<section className='text-gray-600 body-font'>
							<div className='container px-5 py-16 mx-auto'>
								<div className='lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto'>
									<h1 className='flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900'>
										Votre tableau de bord est vide, mais
										n'hésitez pas à le remplir 😜
										<br />
										Cliquez sur le bouton pour ajouter une
										carte !
									</h1>
									<Link
										to='/PostCard'
										className='flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'
									>
										Ajouter une carte
									</Link>
								</div>
							</div>
						</section>
					) : (
						<div className='flex flex-wrap -m-4 justify-center'>
							{showCard()}
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default Cards;
