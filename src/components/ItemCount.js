import React, { useEffect, useState } from "react";
import "./styles/itemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="counter">
			<div className="counter-counter">
				<button disabled={count <= 1} onClick={decrease} className="decrease">
				-
				</button>
				<span className="count">{count}</span>
				<button disabled={count >= stock} onClick={increase} className="increase">
				+
				</button>
			</div>
			
			<div className="btn-container">
				<button disabled={stock <= 0} onClick={() => onAdd(count)} className="btn-add-cart">
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

export default ItemCount;
