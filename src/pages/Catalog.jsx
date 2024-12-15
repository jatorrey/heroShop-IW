import './Catalog.css';

const products = [
    {
        id: 1,
        name: "Playera de Naruto",
        price: 299,
        image: "/images/naruto-shirt.jpg",
    },
    {
        id: 2,
        name: "Playera de Zelda",
        price: 349,
        image: "/images/zelda-shirt.jpg",
    },
    {
        id: 3,
        name: "Figura de Goku",
        price: 499,
        image: "/images/goku-figure.jpg",
    },
    {
        id: 4,
        name: "Mochila de Pokémon",
        price: 399,
        image: "/images/pokemon-backpack.jpg",
    },
];

function Catalog({ addToCart }) {
    return (
        <div className="catalog-container">
            <h1>Catálogo de Productos</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)} className="add-to-cart-button">
                            Agregar al Carrito
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalog;
