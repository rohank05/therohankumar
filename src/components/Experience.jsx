import React from 'react';

const Experience = () => {
    return (
        <section id="experience">
            <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem' }}>The 3-Year Grind</h2>
            <div className="nb-card" style={{ maxWidth: '900px', margin: '0 auto', background: 'var(--accent-neon-pink)' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.8rem' }}>Current: NovoStack</h3>
                    <p style={{ fontWeight: 'bold' }}>Software Developer | 2024 - Present</p>
                    <ul style={{ marginTop: '1rem', listStyle: 'none', paddingLeft: '0' }}>
                        <li style={{ padding: '0.5rem 0' }}>📂 Extracting security fixes for NovoHR (No Cap Security)</li>
                        <li style={{ padding: '0.5rem 0' }}>🚀 Cooking high-performance Go backends</li>
                        <li style={{ padding: '0.5rem 0' }}>✨ Making UIs look like they're from 2030</li>
                    </ul>
                </div>
                <hr style={{ border: '2px solid black', margin: '2rem 0' }} />
                <div>
                    <h3 style={{ fontSize: '1.8rem' }}>Previous: The Journey</h3>
                    <p style={{ fontWeight: 'bold' }}>From Junior to Main Character | 2021 - 2024</p>
                    <p style={{ marginTop: '1rem' }}>
                        Spent 2 years turning coffee into code and accidentally creating bugs (and then fixing them at 2 AM).
                        Learned that `console.log` is the best debugger and that `npm install` is a lifestyle.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experience;
