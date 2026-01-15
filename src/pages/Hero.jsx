import Antigravity from '../components/Antigravity';

const Hero = () => {
    return (
        <section className="hero">
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Antigravity
                    count={100}
                    color="#f472b6"
                    depthFactor={3}
                />
            </div>
            <div className="hero-content" style={{ position: 'relative', zIndex: 10 }}>
                {/* Badge */}
                <div className="hero-badge">
                    FOURNISSEUR MÉDICAL DE CONFIANCE
                </div>

                {/* Main Title */}
                <h1 className="hero-title">
                    Votre Santé, <span className="hero-title-highlight">Livrée.</span>
                </h1>

                {/* Description */}
                <p className="hero-description">
                    Des produits pharmaceutiques et cosmétiques authentiques livrés en toute sécurité à travers les 58 Wilayas.
                </p>

                {/* CTA Buttons */}
                <div className="hero-buttons">
                    <button className="btn btn-primary">
                        Acheter
                    </button>
                    <button className="btn btn-secondary">
                        Découvrir les catégories
                    </button>
                </div>

                {/* Features */}
                <div className="hero-features">
                    <div className="hero-feature">
                        <svg className="hero-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>100% Authentique</span>
                    </div>
                    <div className="hero-feature">
                        <svg className="hero-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Livraison Rapide</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
