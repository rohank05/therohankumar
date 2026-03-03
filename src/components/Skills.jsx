import React from 'react';

const skills = [
    { name: "Go (Golang)", power: "95%", vibe: "The Backend Beast", color: "#00ffff" },
    { name: "React / Next.js", power: "92%", vibe: "UI Main Character", color: "#00ff00" },
    { name: "NestJS / Node", power: "88%", vibe: "API Architect", color: "#ff00ff" },
    { name: "PostgreSQL / SQL", power: "90%", vibe: "Data Hoarder", color: "#ffff00" },
    { name: "Java", power: "85%", vibe: "The Corporate Classic", color: "#00ffff" },
    { name: "C#", power: "82%", vibe: "Game Dev Energy", color: "#ff00ff" },
    { name: "TypeScript", power: "94%", vibe: "Actually Useful JS", color: "#00ff00" },
    { name: "Kotlin", power: "80%", vibe: "Android Enjoyer", color: "#ffff00" }
];

const Skills = () => {
    return (
        <section id="skills" className="dots-bg">
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: '3rem',
                    textAlign: 'center',
                    marginBottom: '4rem',
                    background: 'white',
                    display: 'block',
                    width: 'fit-content',
                    padding: '0.5rem 2rem',
                    border: '4px solid black',
                    margin: '0 auto 4rem auto',
                    boxShadow: '8px 8px 0px black'
                }}>
                    THINGS I COOKED
                </h2>

                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div key={skill.name} className="nb-card" style={{ background: 'white', position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                top: '-10px',
                                right: '-10px',
                                background: 'black',
                                color: 'white',
                                padding: '2px 8px',
                                fontSize: '0.7rem',
                                fontWeight: '900'
                            }}>
                                LEVEL: {skill.power}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{skill.name}</h3>
                            <div style={{ background: 'black', height: '20px', border: '2px solid black', position: 'relative', marginBottom: '0.5rem' }}>
                                <div style={{ background: skill.color, width: skill.power, height: '100%', borderRight: '2px solid black' }}></div>
                            </div>
                            <p style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '0.9rem' }}>{skill.vibe}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative oversized text to fill empty space */}
            <div className="decoration-sticker" style={{ top: '10%', right: '-5%', fontSize: '15rem', transform: 'rotate(-15deg)' }}>CODE</div>
            <div className="decoration-sticker" style={{ bottom: '10%', left: '-5%', fontSize: '12rem', transform: 'rotate(10deg)' }}>BUILD</div>
            <div className="decoration-sticker" style={{ top: '50%', left: '40%', fontSize: '10rem', opacity: '0.05' }}>COOK</div>
        </section>
    );
};

export default Skills;
