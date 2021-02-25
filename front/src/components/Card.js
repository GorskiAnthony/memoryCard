import React from "react";

const Card = ({ content, id }) => {
	return (
		<div className='p-4 lg:w-1/3'>
			<div className='h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative'>
				<h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
					Carte {id}
				</h2>
				<p className='leading-relaxed mb-3'>{content.recto}</p>
				<p className='leading-relaxed mb-3'>{content.verso}</p>
			</div>
		</div>
	);
};
export default Card;
