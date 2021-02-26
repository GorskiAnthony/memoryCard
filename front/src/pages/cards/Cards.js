import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";
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
					console.error("Errorr :", error.message);
				}
				console.error(error);
			}
		}
		// Add a response interceptor

		getData();
	}, [header]);

	const showCard = () => {
		return cards.map((card, i) => <Card key={i + 1} content={card} />);
	};

	return (
		<div className='container px-5 mx-auto'>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-wrap -m-4'>{showCard()}</div>
				</div>
			</section>
		</div>
	);
};

export default Cards;
