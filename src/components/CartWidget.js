import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useCartContext } from "../context/CartContext";
import './styles/CartWidget.css';

const CartWidget = () => {
	const { totalProducts } = useCartContext();

	return (
		<>
			<BiShoppingBag size={22} style={{ color: "#fff" }} />
			<span className="numerito-carrito">{totalProducts() || "0"}</span>
		</>
	);
};

export default CartWidget;
