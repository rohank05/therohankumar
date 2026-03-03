import React, { useState, useEffect } from 'react';

const Hero = () => {
    const titles = ["Main Character", "Full-Stack Chef", "Bug Exterminator (Fr Fr)", "Professional Yapper"];
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Decorative background blobs */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'var(--accent-neon-yellow)', borderRadius: '50%', filter: 'blur(100px)', opacity: '0.2' }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '400px', height: '400px', background: 'var(--accent-neon-pink)', borderRadius: '50%', filter: 'blur(100px)', opacity: '0.2' }}></div>

            <div className="nb-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', background: 'var(--accent-neon-green)', zIndex: 10, position: 'relative' }}>
                <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', marginBottom: '1rem', lineHeight: '0.9' }}>Rohan Kumar</h1>
                <h2 style={{ fontSize: '2rem', height: '3rem', color: 'white', WebkitTextStroke: '2px black' }}>
                    {titles[titleIndex]}
                </h2>
                <p style={{ fontSize: '1.2rem', marginTop: '2rem', fontWeight: 'bold' }}>
                    3 Years Experience. Certified Banger Generator. <br />
                    I code things that actually work (mostly).
                </p>
                <div style={{ marginTop: '3rem' }}>
                    <a href="#projects" className="nb-button jitter" style={{ fontSize: '1.5rem' }}>Vibe Check My Work</a>
                </div>
            </div>

            {/* Floating Stickers & Extra Content */}
            <div className="nb-card jitter" style={{
                position: 'absolute', top: '15%', right: '10%',
                background: 'var(--accent-neon-pink)', transform: 'rotate(5deg)', zIndex: 5
            }}>
                LOW KEY GOATED
            </div>

            <div className="nb-card jitter" style={{
                position: 'absolute', bottom: '20%', left: '8%',
                background: 'var(--accent-neon-cyan)', transform: 'rotate(-10deg)', zIndex: 5
            }}>
                NO CAP JS
            </div>

            <div className="nb-card" style={{
                position: 'absolute', top: '40%', left: '3%',
                background: 'var(--accent-neon-yellow)', transform: 'rotate(-5deg)', zIndex: 5,
                padding: '0.5rem 1rem', fontSize: '0.8rem'
            }}>
                100% ORGANIC CODE
            </div>

            <div className="decoration-sticker" style={{ top: '5%', left: '10%', fontSize: '10rem' }}>{"{ }"}</div>
            <div className="decoration-sticker" style={{ bottom: '10%', right: '15%', fontSize: '8rem' }}>{"</>"}</div>
        </section>
    );
};

export default Hero;
