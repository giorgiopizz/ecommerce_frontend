import React, { useState, useEffect } from "react";
import ProductComp from "../components/ProductComp";
import products from "../services/prodotti";
import { Product } from "../types/Product";
// type Prodotto = {
// 	id: string;
// 	titolo: string;
// 	prezzo: string;
// };
function Home() {
	const [prodotti, setProdotti] = useState<Product[]>([]);
	useEffect(() => {
		products.getAll().then((res) => {
			setProdotti(res.data);
		});
	}, []);
	return (
		<div>
			{prodotti.map((prodotto, index) => (
				<ProductComp key={index} prodotto={prodotto} />
			))}
		</div>
	);
}

export default Home;
