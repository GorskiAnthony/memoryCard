import React, { useState, useEffect } from "react";
import Input from "./Input";
import axios from "axios";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../const.json";

const UpdateCard = ({ history, match }) => {
	const API = url.API;

	const state = {
		idCard: match.params.id,
	};

	const [card, setCard] = useState({
		recto: "",
		verso: "",
	});

	const notifySuccess = () =>
		toast.success("📚 La carte à bien été mis à jour!", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			transition: Zoom,
		});
	const notifyError = () =>
		toast.error("😬 Vous n'avez pas remplit tout les champs ", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			transition: Zoom,
		});

	if (!localStorage.getItem("header")) history.push("/login");

	useEffect(() => {
		console.log(`${API}/api/cards/${state.idCard}`);
		axios
			.get(`${API}/api/cards/${state.idCard}`, {
				headers: {
					"auth-token": localStorage.getItem("header"),
				},
			})
			.then((response) => {
				setCard({
					recto: response.data.recto,
					verso: response.data.verso,
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const handleChange = (event) => {
		setCard({ ...card, [event.target.name]: event.target.value });
	};

	const UpdateCard = async ({ recto, verso }) => {
		await axios
			.put(
				`${API}/api/cards/update/${state.idCard}`,
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
			.then((responses) => {
				console.log(responses);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (card.verso === "" || card.recto === "") {
			notifyError();
		} else {
			UpdateCard(card);
			notifySuccess();

			setTimeout(() => {
				history.push("/dashboard");
			}, 100);
		}
	};

	return (
		<form className='text-gray-600 body-font' onSubmit={handleSubmit}>
			<div className='container px-5 py-24 mx-auto'>
				<div className='heading text-center font-bold text-2xl m-5 text-gray-800'>
					Mettre à jour la flash card
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
							Mettre à jour
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default UpdateCard;
