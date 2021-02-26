import React from "react";

const Logout = ({ header }) => {
	localStorage.removeItem("header");
	header = null;

	const refresh = () => {
		setTimeout(() => {
			window.location.href = "/";
		}, 1000);
	};
	const refreshNow = () => {
		window.location.href = "/";
	};

	return (
		<section className='text-gray-600 body-font'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto'>
					<h1 className='flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900'>
						Vous allez être redirigé vers la pafe d'accueil, si ce
						n'est pas le cas, cliquez sur le bouton ci-contre
						{refresh()}
					</h1>
					<button
						className='flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'
						onClick={refreshNow}
					>
						Home
					</button>
				</div>
			</div>
		</section>
	);
};

export default Logout;
