import React, { useState } from "react";
import axios from "axios";
import Navigations from "../components/Navigations";
import Footer from "../components/Footer";
import { url } from "../const.json";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	const notifyError = (error) =>
		toast.error(`😬 ${error} `, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			transition: Zoom,
		});
	const [header, setHeader] = useState(null);
	const API = url.API;

	async function getHeader({ password, email }) {
		try {
			const response = await axios.post(`${API}/api/user/login`, {
				password,
				email,
			});
			const data = response.data;
			switch (data) {
				case '"email" is not allowed to be empty':
					notifyError("L'email ne doit pas être vide");
					break;
				case "Invalid password":
					notifyError("Oh, tu as pas mis le bon mot de passe");
					break;
				case '""email" must be a valid email"':
					notifyError("L'email n'est pas valide. Essai de nouveau");
					break;
				case "Email doesn't exist":
					notifyError("L'email n'existe pas, tu as un compte ?");
					break;
				case '"password" is not allowed to be empty':
					notifyError("Le mot de passe ne doit pas être vide");
					break;
				case '"password" length must be at least 6 characters long':
					notifyError(
						"Normalement, ton mot de passe fait au moins 6 caractères"
					);
					break;
				default:
					setHeader(response.data);
			}

			// if (password === "" || email === "") {
			// 	notifyError();
			// } else {
			// 	setHeader(response.data);
			// }
		} catch (error) {
			notifyError("Une petite erreur c'est glissé ");
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
			<ToastContainer />
		</div>
	);
};

export default App;
