import React from "react";
import "../assets/card.css";
import axios from "axios";
import { url } from "../const.json";
import { Link } from "react-router-dom";

// delete card
const DashCard = ({ content }) => {
	const handleClick = async (event) => {
		event.preventDefault();
		await axios
			.delete(`${url.API}/api/cards/delete/${content.nbCard}`, {
				headers: {
					"auth-token": localStorage.getItem("header"),
				},
			})
			.then((response) => {
				window.location.reload();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className='flex items-center flex-col mx-3 mb-2'>
			<div className='card-wrapper flip-right'>
				<div className='card'>
					<p className='front'>{content.recto}</p>
					<p className='back'>{content.verso}</p>
				</div>
			</div>
			<span className='flex md:mt-4 mt-10'>
				<button
					className='inline-flex bg-red-500 text-white border-0 py-1 px-2 mx-3 focus:outline-none hover:bg-red-600 rounded'
					onClick={handleClick}
				>
					Supprimer
				</button>
				<Link
					className='inline-flex text-indigo-500 border-0 py-1 px-2 focus:outline-none hover:underline disabled:opacity-50'
					to={`/update/${content.nbCard}`}
				>
					Mise à jour
				</Link>
			</span>
		</div>
	);
};
export default DashCard;
