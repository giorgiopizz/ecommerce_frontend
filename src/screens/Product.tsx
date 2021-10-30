import React from "react";
import { useParams } from "react-router";

function Product() {
	const { id } = useParams<{ id: string }>();
	return <div>Dettagli prodotto {id}</div>;
}

export default Product;
