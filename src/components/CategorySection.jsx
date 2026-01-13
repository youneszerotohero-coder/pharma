import { Baby, Smile, Scissors, Sun, Bone, Pill } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const categories = [
    { name: 'Baby', icon: Baby, color: '#FFE5E5', iconColor: '#FF6B6B' },
    { name: 'Face', icon: Smile, color: '#FFF4E5', iconColor: '#F97316' },
    { name: 'Hair', icon: Scissors, color: '#E5F4FF', iconColor: '#3B82F6' },
    { name: 'Sun', icon: Sun, color: '#FFF9E5', iconColor: '#EAB308' },
    { name: 'Orthopedics', icon: Bone, color: '#F3E5FF', iconColor: '#A855F7' },
    { name: 'Vitamins', icon: Pill, color: '#E5FFE9', iconColor: '#22C55E' },
];

const CategorySection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const displayedCategories = isMobile ? categories.slice(0, 4) : categories;

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="category-section"
        >
            <div className="section-container">
                <h2 className="section-title">Shop by Category</h2>
                <div className="category-grid">
                    {displayedCategories.map((category, index) => (
                        <div key={index} className="category-card" style={{ backgroundColor: category.color }}>
                            <div className="category-icon">
                                <category.icon size={40} color={category.iconColor} strokeWidth={1.5} />
                            </div>
                            <span className="category-name">{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default CategorySection;
