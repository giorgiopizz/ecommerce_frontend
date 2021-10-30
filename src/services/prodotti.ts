import axios from "axios";
import authHeader from "./auth-header";
const baseUrl = "http://localhost:3001/prodotti/";

const getAll = () => {
	return axios.get(baseUrl);
};
const getProduct = (id: string) => {
	return axios.get(baseUrl + id);
};

type Product = {};
const newProduct = (prodotto: Product) => {
	return axios.post(baseUrl + "new", prodotto, { headers: authHeader() });
};
const exprt = {
	getAll,
	getProduct,
	newProduct,
};
export default exprt;
