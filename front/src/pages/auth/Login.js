import React, { useState } from "react";

const Login = ({ getHeader }) => {
	const [login, setLogin] = useState({
		password: "azerty",
		email: "tests@test.fr",
	});

	const handleChange = (event) => {
		setLogin({ [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		getHeader(login);
	};

	return (
		<form className='text-gray-600 body-font' onSubmit={handleSubmit}>
			<div className='container px-5 py-24 mx-auto'>
				<div className='flex flex-col text-center w-full mb-12'>
					<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
						Espace de connexion
					</h1>
					<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
						Vous souhaitez vous rappelez d'information peu utile
						mais vous souhaitez briller en société ? N'hésitez pas à
						vous connecter.
					</p>
				</div>
				<div className='flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end'>
					<div
						className='relative flex-grow w-full'
						data-children-count='1'
					>
						<label
							htmlFor='email'
							className='leading-7 text-sm text-gray-600'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							//à enlever ensuite
							onChange={handleChange}
							value={login.email}
							//! fin
							className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							data-kwimpalastatus='alive'
							data-kwimpalaid='1614111599540-1'
						/>
					</div>
					<div
						className='relative flex-grow w-full'
						data-children-count='1'
					>
						<label
							htmlFor='password'
							className='leading-7 text-sm text-gray-600'
						>
							Password
						</label>
						<input
							type='password'
							id='password'
							name='password'
							//! à enlever
							onChange={handleChange}
							value={login.password}
							//! fun
							className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							data-kwimpalastatus='alive'
							data-kwimpalaid='1614111599540-0'
						/>
					</div>
					<button
						className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
						role='submit'
						type='submit'
					>
						Submit
					</button>
				</div>
			</div>
		</form>
	);
};

export default Login;
