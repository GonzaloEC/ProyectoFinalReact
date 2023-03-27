import React from "react";
import { Link } from "react-router-dom";
import "./styles/item.css";

const Item = ({ info }) => {
	return (
		<div className="item-container">
		
			<img src={info.image} alt="" />

			<div className="info-price">
				<p className="info">{info.title}</p>
				<p className="price">{`$ ${info.price}`}</p>
			</div>

			<div className="btn-detail">
				<Link to={`/detalle/${info.id}`} className="film">
				<button>Ver Detalle</button>
				</Link>
			</div>
		</div>
	);
};

export default Item;