import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const login = (email: string, password: string) => {
	return axios
		.post(API_URL + "signin", {
			email,
			password,
		})
		.then((response) => {
			if (response.data.token) {
				localStorage.setItem("user", JSON.stringify(response.data));
			}

			return response.data;
		});
};

const logout = () => {
	localStorage.removeItem("user");
};

const register = (name: string, email: string, password: string) => {
	return axios.post(API_URL, {
		name,
		email,
		password,
	});
};

const getCurrentUser = () => {
	// return type(localStorage.getItem("user"))? JSON.parse(localStorage.getItem("user")): undefined;
	return JSON.parse(localStorage.getItem("user") as string);
};
const exprt = {
	login: login,
	logout: logout,
	register,
	getCurrentUser,
};
export default exprt;
