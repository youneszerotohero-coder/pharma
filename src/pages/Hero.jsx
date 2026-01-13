import Antigravity from '../components/Antigravity';

const Hero = () => {
    return (
        <section className="hero">
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Antigravity
                    count={100}
                    color="#478240"
                    depthFactor={3}
                />
            </div>
            <div className="hero-content" style={{ position: 'relative', zIndex: 10 }}>
                {/* Badge */}
                <div className="hero-badge">
                    TRUSTED MEDICAL SUPPLIER
                </div>

                {/* Main Title */}
                <h1 className="hero-title">
                    Your Health, <span className="hero-title-highlight">Delivered.</span>
                </h1>

                {/* Description */}
                <p className="hero-description">
                    Authentic pharmaceutical and cosmetic products delivered safely across SR Welayas.
                </p>

                {/* CTA Buttons */}
                <div className="hero-buttons">
                    <button className="btn btn-primary">
                        Shop Now
                    </button>
                    <button className="btn btn-secondary">
                        discover categories
                    </button>
                </div>

                {/* Features */}
                <div className="hero-features">
                    <div className="hero-feature">
                        <svg className="hero-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>100% Authentic</span>
                    </div>
                    <div className="hero-feature">
                        <svg className="hero-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Fast Delivery</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
