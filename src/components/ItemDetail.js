import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import "./styles/itemDetail.css";

export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};

	return (
		<div className="container-detail">
			<div className="detail">
				<img className="detail__image" src={data.image} alt="" />
				<div className="content">
					<h5>{data.category}</h5>
					<h1>{data.title}</h1>
					<span className="price-product">{`$${data.price}`}</span>
					<span className="desc-product">{data.description}</span>
					{goToCart ? (
						<Link className="link" to="/cart"><p>Ir al Carrito</p></Link>
					) : (
						<ItemCount initial={1} stock={10} onAdd={onAdd} />
					)}
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
