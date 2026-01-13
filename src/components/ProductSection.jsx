import { Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductSection = ({ title }) => {
    const products = [
        {
            id: 1,
            name: 'Hydrating Daily Lotion',
            brand: 'CeraVe',
            price: 14.99,
            rating: 4.8,
            reviews: 128,
            image: 'https://i.pinimg.com/1200x/db/aa/c4/dbaac4e9b7c92cfd5d0fd33e1a2d8556.jpg',
            bgColor: '#F5F5F5',
            badge: 'Best Seller'
        },
        {
            id: 2,
            name: 'Vitamin C Serum',
            brand: 'La Roche-Posay',
            price: 29.99,
            rating: 4.9,
            reviews: 85,
            image: 'https://i.pinimg.com/1200x/b4/13/1b/b4131b89326fdd62875c6e4fd30236d5.jpg',
            bgColor: '#FFF0E6',
            badge: 'New'
        },
        {
            id: 3,
            name: 'Gentle Face Cleanser',
            brand: 'Cetaphil',
            price: 11.50,
            rating: 4.7,
            reviews: 210,
            image: 'https://i.pinimg.com/1200x/db/aa/c4/dbaac4e9b7c92cfd5d0fd33e1a2d8556.jpg', // Reusing similar image for demo
            bgColor: '#E6F4FF'
        },
        {
            id: 4,
            name: 'Daily Moisturizing Lotion',
            brand: 'Aveeno',
            price: 9.99,
            rating: 4.6,
            reviews: 156,
            image: 'https://i.pinimg.com/1200x/b4/13/1b/b4131b89326fdd62875c6e4fd30236d5.jpg', // Reusing similar image for demo
            bgColor: '#F0F9EA'
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="product-section"
        >
            <div className="section-container">
                <h2 className="section-title">{title}</h2>
                <div className="product-grid">
                    {products.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="top-seller-card">
                                {product.badge && (
                                    <span className="seller-badge">{product.badge}</span>
                                )}
                                <div className="seller-image" style={{ backgroundColor: product.bgColor }}>
                                    <img src={product.image} alt={product.name} className="seller-image-img" />
                                </div>
                                <div className="seller-info">
                                    <div className="seller-brand">{product.brand}</div>
                                    <h3 className="seller-name">{product.name}</h3>
                                    <div className="seller-rating">
                                        <Star size={14} fill="#FFC107" stroke="#FFC107" />
                                        <span>{product.rating}</span>
                                        <span className="seller-reviews">({product.reviews})</span>
                                    </div>
                                    <div className="seller-price">
                                        ${product.price}
                                        <button className="add-to-cart-btn" aria-label="Add to cart" onClick={(e) => e.preventDefault()}>
                                            <ShoppingCart size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ProductSection;
