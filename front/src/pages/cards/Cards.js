import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";

const Cards = ({ history }) => {
	const [cards, setCards] = useState([]);
	const header = localStorage.getItem("header");

	useEffect(() => {
		// const [isError, setIsError] = useState(false);
		// Une piste à emprunter
		// axios.interceptors.response.use(
		// 	function (response) {
		// 		// Any status code that lie within the range of 2xx cause this function to trigger
		// 		// Do something with response data
		// 		return response;
		// 	},
		// 	function (error) {
		// 		if (error.response.status === 400) {
		// 			setIsError(true);
		// 			console.log("unauthorized, logging out ...");
		// 		}
		// 		return Promise.reject(error.response);
		// 	}
		// );
		async function getData() {
			try {
				// success 🎉
				const response = await axios.get(
					"http://localhost:5050/api/cards",
					{
						headers: {
							"auth-token": header,
						},
					}
				);
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
					console.error("Error", error.message);
				}
				console.error(error);
			}
		}
		// Add a response interceptor

		getData();
	}, []);

	const showCard = () => {
		return cards.map((card, i) => (
			<Card key={i + 1} content={card} id={i} />
		));
	};

	return (
		<div className='container px-5 py-24 mx-auto'>
			<h1>Voilà tes cartes</h1>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-wrap -m-4'>{showCard()}</div>
				</div>
			</section>
		</div>
	);
};

export default Cards;
