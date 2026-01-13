import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const MOCK_PRODUCTS = [
    { id: 1, name: 'Hydrating Daily Lotion', image: 'https://i.pinimg.com/1200x/db/aa/c4/dbaac4e9b7c92cfd5d0fd33e1a2d8556.jpg', price: 24.00, brand: 'Skin Care' },
    { id: 2, name: 'Vitamin C Serum 20%', image: 'https://i.pinimg.com/1200x/b4/13/1b/b4131b89326fdd62875c6e4fd30236d5.jpg', price: 45.00, brand: 'Radiance' },
    { id: 3, name: 'Gentle Face Cleanser', image: 'https://i.pinimg.com/1200x/db/aa/c4/dbaac4e9b7c92cfd5d0fd33e1a2d8556.jpg', price: 15.50, brand: 'Skin Therapy' },
    { id: 4, name: 'Active Muscle Relief Gel', image: 'https://i.pinimg.com/1200x/b4/13/1b/b4131b89326fdd62875c6e4fd30236d5.jpg', price: 12.95, brand: 'Pain Relief' },
    { id: 5, name: 'Organic Herbal Shampoo', image: 'https://i.pinimg.com/1200x/b4/13/1b/b4131b89326fdd62875c6e4fd30236d5.jpg', price: 12.50, brand: 'Hair Care' },
];

const Header = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const filteredProducts = MOCK_PRODUCTS.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const showDropdown = searchQuery.length > 0 && isSearchFocused;

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <div className="header-logo">
                    <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="logo-text">ParaHealth</span>
                </div>

                {/* Search Bar (Desktop) */}
                <div className="header-search">
                    <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search for medicines, creams, brands..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    />

                    {/* Search Dropdown */}
                    {showDropdown && (
                        <div className="search-dropdown">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map(product => (
                                    <div key={product.id} className="search-result-item">
                                        <img src={product.image} alt={product.name} className="search-result-img" />
                                        <div className="search-result-info">
                                            <div className="search-result-name">{product.name}</div>
                                            <div className="search-result-price">${product.price.toFixed(2)}</div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="search-no-results">No products found</div>
                            )}
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
                    {/* Mobile Search */}
                    <div className="mobile-search-container">
                        <div className="mobile-search-bar">
                            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="search-input"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                            />
                            {/* Mobile Search Dropdown */}
                            {showDropdown && (
                                <div className="search-dropdown">
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map(product => (
                                            <div key={product.id} className="search-result-item">
                                                <img src={product.image} alt={product.name} className="search-result-img" />
                                                <div className="search-result-info">
                                                    <div className="search-result-name">{product.name}</div>
                                                    <div className="search-result-price">${product.price.toFixed(2)}</div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="search-no-results">No products found</div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={toggleTheme}
                        className="nav-link theme-toggle-btn"
                        aria-label="Toggle theme"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center' }}
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <a href="#account" className="nav-link">
                        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>Account</span>
                    </a>
                    <a href="#cart" className="nav-link cart-link">
                        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Cart</span>
                        <span className="cart-badge">0</span>
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
