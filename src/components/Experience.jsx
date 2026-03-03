import React from 'react';

const Experience = () => {
    return (
        <section id="experience">
            <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem' }}>THE CAREER GRIND</h2>
            <div className="nb-card" style={{ maxWidth: '900px', margin: '0 auto', background: 'var(--accent-neon-pink)' }}>
                {/* NovoStack */}
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.8rem' }}>NovoStack</h3>
                        <span style={{ fontWeight: '900', background: 'black', color: 'white', padding: '2px 8px', fontSize: '0.8rem' }}>NOV 2025 - PRESENT</span>
                    </div>
                    <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>Software Developer | HelloTrade (Fintech Era 💸)</p>
                    <ul style={{ marginTop: '1rem', listStyle: 'none', paddingLeft: '0' }}>
                        <li style={{ padding: '0.5rem 0' }}>🏦 Building <span style={{ fontWeight: 'bold' }}>HelloTrade</span> — helping businesses and people secure those loans with ease</li>
                        <li style={{ padding: '0.5rem 0' }}>🍳 Cooking absolute heat with <span style={{ fontWeight: 'bold' }}>React, Go, Nest, and Next.js</span></li>
                        <li style={{ padding: '0.5rem 0' }}>🧠 Scaling systems so hard they've got <span style={{ fontWeight: 'bold' }}>Postgres & Redis</span> on speed dial</li>
                        <li style={{ padding: '0.5rem 0' }}>💅 Maintaining peak main character energy while disrupting the fintech space</li>
                    </ul>
                </div>

                <hr style={{ border: '2px solid black', margin: '2rem 0' }} />

                {/* Sparxa Solutions */}
                <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.8rem' }}>Sparxa Solutions Pvt. Ltd.</h3>
                        <span style={{ fontWeight: '900', background: 'black', color: 'white', padding: '2px 8px', fontSize: '0.8rem' }}>MAR 2023 - SEPT 2025</span>
                    </div>
                    <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>Software Developer | CoolR IoT (The OG Grind)</p>
                    <ul style={{ marginTop: '1rem', listStyle: 'none', paddingLeft: '0' }}>
                        <li style={{ padding: '0.5rem 0' }}>❄️ Dominated the <span style={{ fontWeight: 'bold' }}>CoolR IoT Platform</span> with React & ExtJS vibes</li>
                        <li style={{ padding: '0.5rem 0' }}>⛓️ Wrestled backends into submission with <span style={{ fontWeight: 'bold' }}>C#, Node.js, and SQL Server</span></li>
                        <li style={{ padding: '0.5rem 0' }}>🏗️ Architected internal frameworks that are low key goated</li>
                        <li style={{ padding: '0.5rem 0' }}>☕ Turned an unholy amount of caffeine into enterprise-grade features</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
