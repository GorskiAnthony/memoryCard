import React, { useState } from "react";
import axios from "axios";
import Navigations from "../components/Navigations";

const App = () => {
	const [header, setHeader] = useState(null);

	async function getHeader({ password, email }) {
		try {
			const response = await axios.post(
				"http://localhost:5050/api/user/login",
				{
					password,
					email,
				}
			);
			setHeader(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	if (header !== null) {
		localStorage.setItem("header", header);
	}

	return (
		<div>
			<Navigations getHeader={getHeader} />
		</div>
	);
};

export default App;
