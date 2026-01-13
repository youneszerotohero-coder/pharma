import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="footer"
        >
            <div className="footer-container">
                {/* Brand Section */}
                <div className="footer-section">
                    <div className="footer-logo">
                        <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span className="logo-text">ParaHealth</span>
                    </div>
                    <p className="footer-description">
                        Your trusted partner for all medical and cosmetic needs. Delivering quality and care to your doorstep.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div className="footer-section">
                    <h3 className="footer-heading">Categories</h3>
                    <ul className="footer-links">
                        <li><a href="#">Skin Care</a></li>
                        <li><a href="#">Hair Care</a></li>
                        <li><a href="#">Baby Care</a></li>
                        <li><a href="#">Vitamins</a></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="footer-section">
                    <h3 className="footer-heading">Contact Us</h3>
                    <ul className="footer-links">
                        <li><a href="#">support@parahealth.com</a></li>
                        <li><a href="#">+213 555 123 456</a></li>
                        <li><a href="#">Algiers, Algeria</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-container">
                    <p className="copyright">© 2024 ParaHealth. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#"><Facebook /></a>
                        <a href="#"><Twitter /></a>
                        <a href="#"><Instagram /></a>
                        <a href="#"><Linkedin /></a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
