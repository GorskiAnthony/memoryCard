import React, { useState } from "react";
import Input from "../../components/Input";
import axios from "axios";

const PostCard = ({ history }) => {
	if (!localStorage.getItem("header")) history.push("/login");

	const [card, setCard] = useState({});

	const handleChange = (event) => {
		setCard({ ...card, [event.target.name]: event.target.value });
	};

	const addCard = ({ recto, verso }) => {
		axios
			.post(
				"http://localhost:5050/api/cards/add",
				{
					recto,
					verso,
				},
				{
					headers: {
						"auth-token": localStorage.getItem("header"),
					},
				}
			)
			.then((response) => {
				// success 🎉

				// if response.data is not null
				const data = response.data;
				console.log(`je suis dans le then: ${data}`);
			})
			.catch((err) => {
				// error 😱
				console.log("je suis danbs le catch: ");
				console.log(err);
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addCard(card);
		history.push("/cards");
	};

	return (
		<form className='text-gray-600 body-font' onSubmit={handleSubmit}>
			<div className='container px-5 py-24 mx-auto'>
				<div className='heading text-center font-bold text-2xl m-5 text-gray-800'>
					Ajout d'une nouvelle flash card
				</div>

				<div className='editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl'>
					<Input
						type='text'
						name='recto'
						onChange={handleChange}
						value={card.recto}
						text='Question'
					/>
					<Input
						type='text'
						name='verso'
						onChange={handleChange}
						value={card.verso}
						text='Réponse'
					/>

					<div className='buttons flex pt-4'>
						<button
							className='btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500'
							type='submit'
						>
							Post
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default PostCard;
