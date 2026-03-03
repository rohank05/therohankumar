import React from 'react';

const projects = [
    {
        title: "URC Tracker",
        description: "How I proved to my boss I was actually at my desk. Mobile clock-in with selfie verification. Fr Fr.",
        link: "https://tracker.therohankumar.com",
        tag: "Certified Banger",
        color: "var(--accent-neon-yellow)"
    },
    {
        title: "RetailSync",
        description: "POS for garment shops. Handles bargaining better than your auntie. Web + Mobile combo.",
        link: "https://sangini.therohankumar.com",
        tag: "High Aura",
        color: "var(--accent-neon-cyan)"
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem' }}>The Finished Dishes</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                {projects.map((project, index) => (
                    <div key={index} className="nb-card" style={{ background: project.color }}>
                        <div style={{ background: 'black', color: 'white', display: 'inline-block', padding: '0.2rem 0.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                            {project.tag}
                        </div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{project.title}</h3>
                        <p style={{ fontWeight: 'bold', marginBottom: '2rem' }}>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noreferrer" className="nb-button">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
