import React, { useState, useEffect } from "react";
import axios from "axios";

const Cards = () => {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get(
					"http://localhost:5050/api/cards",
					{
						headers: {
							"auth-token":
								"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDMzYWE0MWVlZTA0YzI3NWRmODAyNGEiLCJpYXQiOjE2MTQwMjQwNzJ9.KPMHL9CaF-y76XVW5GyJox5ghn1VueS6l6vVoNelkdE",
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
	return (
		<div>
			<h1>Je get les datas</h1>
			{cards.map((card) => console.log(card.verso))}
		</div>
	);
};

export default Cards;
