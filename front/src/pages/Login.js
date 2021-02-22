import React from "react";
import axios from "axios";

const Login = () => {
	axios
		.post("http://localhost:5050/api/user/login", {
			password: "azerty",
			email: "tests@test.fr",
		})
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.error(error);
		});
	return (
		<div>
			<h1>Je vais me logger</h1>
		</div>
	);
};

export default Login;
