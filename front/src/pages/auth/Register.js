import React, { useState } from "react";
import Input from "../../components/Input";
import axios from "axios";

const Register = ({ history }) => {
	const [user, setUser] = useState({
		name: "Anne Onyme",
		email: "anne@onyme.fr",
		password: "azerty",
	});

	//const [isExist, setIsExist] = useState(true);
	const [errors, setErrors] = useState("");

	const handleChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const postUser = ({ name, email, password }) => {
		axios
			.post("http://localhost:5050/api/user/register", {
				name,
				email,
				password,
			})
			.then((response) => {
				// success 🎉

				// if response.data is not null
				const data = response.data;

				console.log(`je suis danbs le then: ${data}`);
			})
			.catch((err) => {
				// error 😱
				console.log("je suis danbs le catch: " + errors);
				console.log(err);
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		postUser(user);
	};

	const displayError = () => (
		<div
			className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-5 rounded relative text-sm'
			role='alert'
		>
			<strong className='font-bold'>
				Oh ! Je crois qu'il y a une erreur
			</strong>
			<span className='block sm:inline'>{errors}</span>
		</div>
	);

	return (
		<form className='text-gray-600 body-font' onSubmit={handleSubmit}>
			<div className='container px-5 py-24 mx-auto'>
				<div className='flex flex-col text-center w-full mb-12'>
					<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
						Inscription
					</h1>
					<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
						Bien joué ! Vous avez souhaitez consciemment faire
						partie de ceux qui souhaitent appréhender leur mémoire !
					</p>
				</div>
				{errors ? displayError() : ""}
				<div className='flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end'>
					<div className='relative flex-grow w-full'>
						<Input
							type='text'
							name='name'
							onChange={handleChange}
							value={user.name}
							text='Votre nom et prénom'
						/>
					</div>
					<div
						className='relative flex-grow w-full'
						data-children-count='1'
					>
						<Input
							type='email'
							name='email'
							onChange={handleChange}
							value={user.email}
							text='Votre email'
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
							value={user.password}
							text='Et le mot de passe'
						/>
					</div>
					<button
						className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
						type='submit'
					>
						Go!
					</button>
				</div>
			</div>
		</form>
	);
};

export default Register;
