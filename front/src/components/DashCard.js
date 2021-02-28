import React from "react";
import "../assets/card.css";
import axios from "axios";
import { url } from "../const.json";
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
					className='inline-flex text-red-500 border-0 py-1 px-2 mx-3 focus:outline-none hover:underline'
					onClick={handleClick}
				>
					Delete
				</button>
				<button
					className='inline-flex text-indigo-500 border-0 py-1 px-2 focus:outline-none hover:underline disabled:opacity-50'
					disabled
				>
					Update
				</button>
			</span>
		</div>
	);
};
export default DashCard;
