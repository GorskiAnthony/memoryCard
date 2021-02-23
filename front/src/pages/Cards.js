import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Cards = () => {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get(
					"http://localhost:5050/api/cards",
					{
						headers: {
							"auth-token": localStorage.getItem("header"),
						},
					}
				);
				setCards(response.data);
			} catch (error) {
				console.error(error);
			}
		}
		getData();
	}, []);

	const showCard = () => {
		return cards.map((card, i) => <Card key={i + 1} content={card} />);
	};

	return (
		<div>
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
