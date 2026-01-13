import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, RefreshCcw } from 'lucide-react';

interface SnakeGameProps {
    onClose: () => void;
}

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 0, y: 0 };
const GAME_SPEED = 100;

export function SnakeGame({ onClose }: SnakeGameProps) {
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [food, setFood] = useState({ x: 15, y: 5 });
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(() => {
        const saved = localStorage.getItem('snakeHighScore');
        return saved ? parseInt(saved) : 0;
    });
    const [gameOver, setGameOver] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const generateFood = useCallback(() => {
        const x = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;
        const y = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;
        setFood({ x, y });
    }, []);

    const resetGame = () => {
        setSnake(INITIAL_SNAKE);
        setDirection(INITIAL_DIRECTION);
        setScore(0);
        setGameOver(false);
        setIsPlaying(false);
        generateFood();
    };

    const checkCollision = (head: { x: number; y: number }) => {
        // Wall collision
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
            return true;
        }
        // Self collision
        for (const segment of snake) {
            if (head.x === segment.x && head.y === segment.y) {
                return true;
            }
        }
        return false;
    };

    const gameLoop = useCallback(() => {
        if (gameOver || !isPlaying) return;

        setSnake((prevSnake) => {
            const newHead = {
                x: prevSnake[0].x + direction.x,
                y: prevSnake[0].y + direction.y,
            };

            if (checkCollision(newHead)) {
                setGameOver(true);
                if (score > highScore) {
                    setHighScore(score);
                    localStorage.setItem('snakeHighScore', score.toString());
                }
                return prevSnake;
            }

            const newSnake = [newHead, ...prevSnake];

            if (newHead.x === food.x && newHead.y === food.y) {
                setScore((s) => s + 10);
                generateFood();
            } else {
                newSnake.pop();
            }

            return newSnake;
        });
    }, [direction, food, gameOver, score, highScore, isPlaying, generateFood]);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!isPlaying && !gameOver && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                setIsPlaying(true);
            }

            switch (e.key) {
                case 'ArrowUp':
                    if (direction.y === 0) setDirection({ x: 0, y: -1 });
                    break;
                case 'ArrowDown':
                    if (direction.y === 0) setDirection({ x: 0, y: 1 });
                    break;
                case 'ArrowLeft':
                    if (direction.x === 0) setDirection({ x: -1, y: 0 });
                    break;
                case 'ArrowRight':
                    if (direction.x === 0) setDirection({ x: 1, y: 0 });
                    break;
                case 'Escape':
                    onClose();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        const interval = setInterval(gameLoop, GAME_SPEED);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            clearInterval(interval);
        };
    }, [direction, gameLoop, isPlaying, gameOver, onClose]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
            <div className="bg-black border-4 border-primary p-6 relative max-w-lg w-full shadow-[0_0_20px_rgba(255,0,255,0.5)]">

                {/* Header */}
                <div className="flex justify-between items-center mb-6 font-retro text-secondary">
                    <div className="flex items-center gap-4">
                        <div>SCORE: {score}</div>
                        <div className="flex items-center gap-2 text-accent text-xs">
                            <Trophy size={14} /> HI: {highScore}
                        </div>
                    </div>
                    <button onClick={onClose} className="hover:text-primary transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Game Area */}
                <div
                    className="relative bg-[#111] border-2 border-[#333] mx-auto"
                    style={{
                        width: GRID_SIZE * CELL_SIZE,
                        height: GRID_SIZE * CELL_SIZE,
                        boxShadow: 'inset 0 0 10px rgba(0,0,0,0.8)'
                    }}
                >
                    {/* Grid Background */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`
                        }}
                    />

                    {/* Snake */}
                    {snake.map((segment, i) => (
                        <div
                            key={i}
                            className="absolute bg-success"
                            style={{
                                left: segment.x * CELL_SIZE,
                                top: segment.y * CELL_SIZE,
                                width: CELL_SIZE - 2,
                                height: CELL_SIZE - 2,
                                boxShadow: '0 0 5px #00ff00',
                                borderRadius: i === 0 ? '4px' : '0'
                            }}
                        />
                    ))}

                    {/* Food */}
                    <div
                        className="absolute bg-primary animate-pulse"
                        style={{
                            left: food.x * CELL_SIZE,
                            top: food.y * CELL_SIZE,
                            width: CELL_SIZE - 2,
                            height: CELL_SIZE - 2,
                            borderRadius: '50%',
                            boxShadow: '0 0 10px #ff00ff'
                        }}
                    />

                    {/* Messages */}
                    <AnimatePresence>
                        {!isPlaying && !gameOver && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex items-center justify-center bg-black/60"
                            >
                                <div className="text-center font-retro text-white animate-pulse">
                                    <p className="mb-2">PRESS ARROW KEYS</p>
                                    <p className="text-xs text-gray-400">TO START</p>
                                </div>
                            </motion.div>
                        )}

                        {gameOver && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-black/80"
                            >
                                <h2 className="text-3xl font-retro text-primary mb-4 glow-text">GAME OVER</h2>
                                <div className="text-xl font-retro text-white mb-6">SCORE: {score}</div>
                                <button
                                    onClick={resetGame}
                                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-black font-retro text-xs hover:bg-white transition-colors"
                                >
                                    <RefreshCcw size={14} /> TRY AGAIN
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Instructions */}
                <div className="mt-4 text-center font-tech text-gray-500 text-sm">
                    USE ARROW KEYS TO MOVE • ESC TO EXIT
                </div>
            </div>
        </motion.div>
    );
}
