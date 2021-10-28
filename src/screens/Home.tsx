import React, { useState, useEffect } from "react";
import products from "../services/prodotti";

type Prodotto = {
	id: string;
	titolo: string;
	prezzo: string;
};
function Home() {
	const [prodotti, setProdotti] = useState<Prodotto[]>([]);
	useEffect(() => {
		products.getAll().then((res) => {
			setProdotti(res.content);
		});
	}, []);
	return <div></div>;
}

export default Home;
