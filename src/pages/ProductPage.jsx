import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../productPage.css';

// Mock product data
const PRODUCTS = {
    1: {
        id: 1,
        name: 'Hydrating Daily Lotion',
        brand: 'CeraVe',
        price: 14.99,
        oldPrice: 19.99,
        rating: 4.8,
        reviews: 128,
        images: [
            'https://i.pinimg.com/1200x/db/aa/c4/dbaac4e9b7c92cfd5d0fd33e1a2d8556.jpg',
            'https://i.pinimg.com/1200x/b4/13/1b/b4131b89326fdd62875c6e4fd30236d5.jpg',
            'https://i.pinimg.com/1200x/db/aa/c4/dbaac4e9b7c92cfd5d0fd33e1a2d8556.jpg',
        ],
        description: 'A lightweight, non-greasy daily moisturizer that provides long-lasting hydration. Formulated with hyaluronic acid and ceramides to restore and maintain the skin\'s natural protective barrier.',
        features: [
            'Fragrance-free and non-comedogenic',
            'Suitable for all skin types',
            'Dermatologist recommended',
            'Contains hyaluronic acid',
            'Paraben-free formula'
        ],
        inStock: true,
        category: 'Skin Care'
    },
    2: {
        id: 2,
        name: 'Vitamin C Serum',
        brand: 'La Roche-Posay',
        price: 29.99,
        rating: 4.9,
        reviews: 85,
        images: [
            'https://i.pinimg.com/1200x/b4/13/1b/b4131b89326fdd62875c6e4fd30236d5.jpg',
            'https://i.pinimg.com/1200x/db/aa/c4/dbaac4e9b7c92cfd5d0fd33e1a2d8556.jpg',
        ],
        description: 'Powerful antioxidant serum that brightens skin and reduces signs of aging. Contains 20% pure vitamin C for maximum effectiveness.',
        features: [
            'Brightens complexion',
            'Reduces fine lines',
            'Evens skin tone',
            'Antioxidant protection',
            'Lightweight texture'
        ],
        inStock: true,
        category: 'Skin Care'
    }
};

const ProductPage = ({ theme, toggleTheme }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = PRODUCTS[id] || PRODUCTS[1];

    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const handleQuantityChange = (delta) => {
        setQuantity(Math.max(1, quantity + delta));
    };

    return (
        <div className="product-page">
            <Header theme={theme} toggleTheme={toggleTheme} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="product-container"
            >
                {/* Back Button */}
                <button onClick={() => navigate('/')} className="back-button">
                    <ChevronLeft size={20} />
                    Back to Shop
                </button>

                <div className="product-content">
                    {/* Image Gallery */}
                    <div className="product-gallery">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="main-image-container"
                        >
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="main-product-image"
                            />
                        </motion.div>

                        <div className="thumbnail-container">
                            {product.images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <img src={img} alt={`${product.name} ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="product-info-section"
                    >
                        <div className="product-brand">{product.brand}</div>
                        <h1 className="product-title">{product.name}</h1>

                        <div className="product-rating-section">
                            <div className="rating-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill={i < Math.floor(product.rating) ? '#FFC107' : 'none'}
                                        stroke="#FFC107"
                                    />
                                ))}
                            </div>
                            <span className="rating-text">{product.rating} ({product.reviews} reviews)</span>
                        </div>

                        <div className="product-price-section">
                            <span className="current-price">${product.price}</span>
                            {product.oldPrice && (
                                <span className="old-price">${product.oldPrice}</span>
                            )}
                            {product.oldPrice && (
                                <span className="discount-badge">
                                    {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                                </span>
                            )}
                        </div>

                        <div className="stock-status">
                            {product.inStock ? (
                                <span className="in-stock">✓ In Stock</span>
                            ) : (
                                <span className="out-of-stock">Out of Stock</span>
                            )}
                        </div>

                        {/* Quantity Selector */}
                        <div className="quantity-section">
                            <label>Quantity:</label>
                            <div className="quantity-selector">
                                <button onClick={() => handleQuantityChange(-1)} className="qty-btn">
                                    <Minus size={16} />
                                </button>
                                <span className="qty-value">{quantity}</span>
                                <button onClick={() => handleQuantityChange(1)} className="qty-btn">
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="product-actions">
                            <button className="add-to-cart-btn primary">
                                <ShoppingCart size={20} />
                                Add to Cart
                            </button>
                            <button className="icon-btn">
                                <Heart size={20} />
                            </button>
                            <button className="icon-btn">
                                <Share2 size={20} />
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="product-tabs">
                            <div className="tab-headers">
                                <button
                                    className={`tab-header ${activeTab === 'description' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('description')}
                                >
                                    Description
                                </button>
                                <button
                                    className={`tab-header ${activeTab === 'features' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('features')}
                                >
                                    Features
                                </button>
                            </div>

                            <div className="tab-content">
                                {activeTab === 'description' && (
                                    <p className="product-description">{product.description}</p>
                                )}
                                {activeTab === 'features' && (
                                    <ul className="product-features">
                                        {product.features.map((feature, index) => (
                                            <li key={index}>✓ {feature}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <Footer />
        </div>
    );
};

export default ProductPage;
