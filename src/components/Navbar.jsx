import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ cart }) {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="logo-link">Hero-Shop</Link>
            </div>
            <ul className="navbar-menu">
                <li>
                    <Link to="/" className="menu-item">Inicio</Link>
                </li>
                <li>
                    <Link to="/catalog" className="menu-item">Catálogo</Link>
                </li>
                <li>
                    <Link to="/cart" className="menu-item">Carrito: {totalItems}</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
