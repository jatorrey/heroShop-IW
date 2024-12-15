import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Verificar si el producto ya está en el carrito
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Agregar un nuevo producto al carrito
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <Router>
      {/* Pasar addToCart y cart como props a Navbar y Catalog */}
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
