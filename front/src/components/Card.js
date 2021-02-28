import React from "react";
import "../assets/card.css";
// // img
// import sad from "../images/sad.svg";
// import smile from "../images/smile.svg";
// delete card

const Card = ({ content }) => {
	return (
		<div className='flex items-center flex-col mx-3 mb-2'>
			<div className='card-wrapper flip-right'>
				<div className='card'>
					<p className='front'>{content.recto}</p>
					<p className='back'>{content.verso}</p>
				</div>
			</div>
			{
				// <span className='flex md:mt-4 mt-10'>
				// 	<button
				// 		className='inline-flex text-white bg-red-500 border-0 py-1 px-2 mx-3 focus:outline-none hover:bg-red-600 rounded disabled:opacity-50'
				// 		disabled
				// 	>
				// 		<img src={sad} alt='sad' className='w-3' />
				// 	</button>
				// 	<button
				// 		className='inline-flex text-indigo-500 bg-white border-0 py-1 px-2 focus:outline-none hover:bg-ingigo-500 rounded disabled:opacity-50'
				// 		disabled
				// 	>
				// 		<img src={smile} alt='smile' className='w-3' />
				// 	</button>
				// </span>
			}
		</div>
	);
};
export default Card;
