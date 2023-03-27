import React, {useState} from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars} from 'react-icons/fa';
import './styles/navBar.css'

const NavBar = () => {
	const [click, setClick] = useState(false);
    const handleClick = () => setClick (!click);

	return (
		<div className="container-nav">
			<nav className="nav">
				
				<div className="hamburger" onClick = {handleClick}>
                    {click ? (<FaTimes size={22} style={{ color: "#fff" }} />
                    ) : (<FaBars size={22} style={{ color: "#fff" }}/>
                    )}
                </div>

				<div className="nav__brand">
					<NavLink className="nav__link" to="/">
						Sh Shop
					</NavLink>
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li onClick={handleClick}>
						<NavLink className="nav__link" to="/categoria/calzado">
							Calzados
						</NavLink>
					</li>
					<li onClick={handleClick}>
						<NavLink className="nav__link" to="/categoria/buzo">
							Buzos
						</NavLink>
					</li>

					<li onClick={handleClick}>
						<NavLink className="nav__link" to="/categoria/camisa">
							Camisas
						</NavLink>
					</li>

					<li onClick={handleClick}>
						<NavLink className="nav__link" to="/categoria/campera">
							Camperas
						</NavLink>
					</li>

					<li onClick={handleClick}>
						<NavLink className="nav__link" to="/categoria/perfume">
							Perfumes
						</NavLink>
					</li>
				</ul>

				<div className="carrito">
					<NavLink className="nav__link" to="cart">
						<CartWidget/>
					</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
