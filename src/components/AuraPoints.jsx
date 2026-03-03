import React, { useState, useEffect } from 'react';

const AuraPoints = () => {
    const [aura, setAura] = useState(1000);

    useEffect(() => {
        const handleScroll = () => {
            setAura(prev => prev + 1);
        };

        const handleClick = () => {
            setAura(prev => prev + 10);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div id="aura-counter" className="nb-card">
            {aura} AURA POINTS
        </div>
    );
};

export default AuraPoints;
