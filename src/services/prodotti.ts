import axios from "axios";
const baseUrl = "http://localhost:3001/prodotti";

const getAll = () => {
	return axios.get(baseUrl);
};
const getProduct = (id: string) => {
	return axios.get(baseUrl + "/" + string);
};

const exprt = {
	getAll: getAll,
	getProduct: getProduct,
};
export default exprt;
