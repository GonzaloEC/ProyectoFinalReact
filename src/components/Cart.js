import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import './styles/Cart.css';

const Cart = () => {
	const { cart, totalPrice } = useCartContext();



	if (cart.length === 0) {
		return (
			<>
				<p className="carrito-title">Carrito Vacío</p>
				<Link className="link-buy" to="/"><p>Hacer Compras</p></Link>
			</>
		);
	}

	return (
		<>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}

			<div className="div-total">
				<p>Total: ${(totalPrice()).toFixed(3)}</p>
				<Link to ="/checkout"><button>Emitir compra</button></Link>
			</div>
		</>
	);
};

export default Cart;
