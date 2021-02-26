import React, { useState } from "react";
import axios from "axios";
import Navigations from "../components/Navigations";
import Footer from "../components/Footer";
import { url } from "../const.json";

const App = () => {
	const [header, setHeader] = useState(null);
	const API = url.API;

	async function getHeader({ password, email }) {
		try {
			const response = await axios.post(`${API}/api/user/login`, {
				password,
				email,
			});
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
			<Navigations getHeader={getHeader} header={header} />
			<Footer />
		</div>
	);
};

export default App;
