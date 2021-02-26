import React from "react";
import "../assets/card.css";
const Card = ({ content }) => {
	return (
		<div className='card-wrapper flip-right'>
			<div className='card'>
				<p className='front'>{content.recto}</p>
				<p className='back'>{content.verso}</p>
			</div>
		</div>
	);
};
export default Card;
