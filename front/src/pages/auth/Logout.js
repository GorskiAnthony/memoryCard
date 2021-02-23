import React from "react";

const Logout = () => {
	localStorage.removeItem("header");

	return (
		<div>
			<h1>Je suis délogué</h1>
		</div>
	);
};

export default Logout;
