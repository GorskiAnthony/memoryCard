import React from "react";

const Input = ({ name, type, onChange, value, text }) => {
	return (
		<>
			<label htmlFor={name} className='leading-7 text-sm text-gray-600'>
				{text}
			</label>
			<input
				type={type}
				id={name}
				name={name}
				onChange={onChange}
				value={value}
				className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
			/>
		</>
	);
};

export default Input;
