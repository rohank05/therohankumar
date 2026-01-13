import { useState, useEffect } from 'react';

interface EasterEggProps {
    readonly onUnlock: () => void;
}

const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

export function EasterEgg({ onUnlock }: EasterEggProps) {
    const [, setInput] = useState<string[]>([]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key;

            setInput((prev) => {
                const newInput = [...prev, key];
                if (newInput.length > KONAMI_CODE.length) {
                    newInput.shift();
                }

                if (newInput.join(',') === KONAMI_CODE.join(',')) {
                    onUnlock();
                    return [];
                }
                return newInput;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onUnlock]);

    return null;
}
