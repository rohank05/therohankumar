import React from 'react';

const Contact = () => {
    return (
        <section id="contact" style={{ textAlign: 'center' }}>
            <div className="nb-card" style={{ background: 'var(--accent-neon-yellow)', display: 'inline-block', padding: '4rem' }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Slide into my DMs</h2>
                <p style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '3rem' }}>
                    (Or just send an email if you're old school)
                </p>
                <a
                    href="mailto:mail@therohankumar.com"
                    className="nb-button jitter"
                    style={{ fontSize: '2rem', padding: '2rem 4rem' }}
                >
                    SAY HI (Fr Fr)
                </a>
                <div style={{ marginTop: '3rem', fontFamily: 'var(--font-mono)' }}>
                    mail@therohankumar.com
                </div>
            </div>
            <footer style={{ marginTop: '4rem', fontWeight: 'bold' }}>
                Made with 💖 and too much caffeine by Rohan Kumar © 2026
            </footer>
        </section>
    );
};

export default Contact;
