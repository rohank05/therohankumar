import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailingText, setTrailingText] = useState("No Cap");

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleDown = () => setTrailingText("BET");
        const handleUp = () => setTrailingText("No Cap");

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleDown);
        window.addEventListener('mouseup', handleUp);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleDown);
            window.removeEventListener('mouseup', handleUp);
        };
    }, []);

    return (
        <div
            className="cursor-blob"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            <span style={{
                fontSize: '10px',
                color: 'black',
                fontWeight: 'bold',
                pointerEvents: 'none',
                lineHeight: '1',
                display: 'block'
            }}>
                {trailingText}
            </span>
        </div>
    );
};

export default CustomCursor;
