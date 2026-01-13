import Hero from './Hero';
import CategorySection from '../components/CategorySection';
import ProductSection from '../components/ProductSection';
import TopSellers from '../components/TopSellers';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Hero />
            <CategorySection />
            <ProductSection title="Recommended For You" />
            <TopSellers />
            <Footer />
        </>
    );
};

export default HomePage;
