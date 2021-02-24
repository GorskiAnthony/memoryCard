import React, { useState } from "react";
import Input from "../../components/Input";

const Login = ({ getHeader, history }) => {
	const [login, setLogin] = useState({
		password: "azerty",
		email: "tests@test.fr",
	});

	const handleChange = (event) => {
		setLogin({ ...login, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		getHeader(login);
		history.push("/cards");
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
						<Input
							type='email'
							name='email'
							onChange={handleChange}
							value={login.email}
							text='Email'
						/>
					</div>
					<div
						className='relative flex-grow w-full'
						data-children-count='1'
					>
						<Input
							type='password'
							name='password'
							onChange={handleChange}
							value={login.password}
							text='Mot de passe'
						/>
					</div>
					<button
						className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
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
