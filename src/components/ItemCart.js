import React from 'react';
import { useCartContext } from '../context/CartContext';
import './styles/itemCart.css';
import {FaTrashAlt} from 'react-icons/fa';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.image} alt={product.title} />
            <div className='product-details'>
                <div>
                <p>Título:</p> <span>{product.title}</span>
                </div>

                <div>
                <p>Cantidad:</p> <span>{product.quantity}</span>
                </div>

                <div>
                <p>Precio u.:</p> <span>{product.price}</span>
                </div>

                <div>
                <p>Subtotal:</p> <span> ${(product.quantity * product.price).toFixed(3)} </span>
                </div>

                <div className='btn-btn'>
                <button onClick={() => removeProduct(product.id)}><FaTrashAlt size={14} style={{ color: "#fff" }} /></button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart