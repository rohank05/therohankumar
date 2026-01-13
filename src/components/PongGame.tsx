import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RefreshCcw, MousePointer2 } from 'lucide-react';

interface PongGameProps {
    onClose: () => void;
}

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 60;
const BALL_SIZE = 10;
const AI_SPEED = 3.5;
const PLAY_SPEED = 5;

export function PongGame({ onClose }: PongGameProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playerScore, setPlayerScore] = useState(0);
    const [aiScore, setAiScore] = useState(0);
    const [winner, setWinner] = useState<'PLAYER' | 'AI' | null>(null);

    // Game State Refs (for performance loop)
    const gameState = useRef({
        playerY: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
        aiY: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
        ball: { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2, dx: PLAY_SPEED, dy: PLAY_SPEED },
    });

    const resetBall = () => {
        gameState.current.ball = {
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2,
            dx: (Math.random() > 0.5 ? 1 : -1) * PLAY_SPEED,
            dy: (Math.random() * 2 - 1) * PLAY_SPEED
        };
    };

    const gameLoop = useCallback(() => {
        if (!isPlaying || winner) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const state = gameState.current;

        // AI Movement
        const aiCenter = state.aiY + PADDLE_HEIGHT / 2;
        if (aiCenter < state.ball.y - 10) state.aiY += AI_SPEED;
        else if (aiCenter > state.ball.y + 10) state.aiY -= AI_SPEED;

        // Clamp AI Paddle
        state.aiY = Math.max(0, Math.min(CANVAS_HEIGHT - PADDLE_HEIGHT, state.aiY));

        // Ball Movement
        state.ball.x += state.ball.dx;
        state.ball.y += state.ball.dy;

        // Wall Collisions
        if (state.ball.y <= 0 || state.ball.y + BALL_SIZE >= CANVAS_HEIGHT) {
            state.ball.dy *= -1;
        }

        // Paddle Collisions
        // Player
        if (
            state.ball.x <= PADDLE_WIDTH + 10 &&
            state.ball.y + BALL_SIZE >= state.playerY &&
            state.ball.y <= state.playerY + PADDLE_HEIGHT
        ) {
            state.ball.dx *= -1.1; // Speed up
            // Add english based on where it hit
            const hitPoint = (state.ball.y + BALL_SIZE / 2) - (state.playerY + PADDLE_HEIGHT / 2);
            state.ball.dy = hitPoint * 0.2;
        }

        // AI
        if (
            state.ball.x + BALL_SIZE >= CANVAS_WIDTH - PADDLE_WIDTH - 10 &&
            state.ball.y + BALL_SIZE >= state.aiY &&
            state.ball.y <= state.aiY + PADDLE_HEIGHT
        ) {
            state.ball.dx *= -1.1;
        }

        // Scoring
        if (state.ball.x < 0) {
            setAiScore(s => {
                const newScore = s + 1;
                if (newScore >= 5) setWinner('AI');
                return newScore;
            });
            resetBall();
        } else if (state.ball.x > CANVAS_WIDTH) {
            setPlayerScore(s => {
                const newScore = s + 1;
                if (newScore >= 5) setWinner('PLAYER');
                return newScore;
            });
            resetBall();
        }

        // Draw
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Center Line
        ctx.strokeStyle = '#333';
        ctx.setLineDash([10, 10]);
        ctx.beginPath();
        ctx.moveTo(CANVAS_WIDTH / 2, 0);
        ctx.lineTo(CANVAS_WIDTH / 2, CANVAS_HEIGHT);
        ctx.stroke();
        ctx.setLineDash([]);

        // Fill Styles
        ctx.fillStyle = '#ff00ff'; // Player
        ctx.fillRect(10, state.playerY, PADDLE_WIDTH, PADDLE_HEIGHT);

        ctx.fillStyle = '#00ffff'; // AI
        ctx.fillRect(CANVAS_WIDTH - PADDLE_WIDTH - 10, state.aiY, PADDLE_WIDTH, PADDLE_HEIGHT);

        ctx.fillStyle = '#ffff00'; // Ball
        ctx.fillRect(state.ball.x, state.ball.y, BALL_SIZE, BALL_SIZE);

        requestAnimationFrame(gameLoop);
    }, [isPlaying, winner]);

    useEffect(() => {
        let animId: number;
        if (isPlaying) {
            animId = requestAnimationFrame(gameLoop);
        }
        return () => cancelAnimationFrame(animId);
    }, [isPlaying, gameLoop]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!canvasRef.current || !isPlaying) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseY = e.clientY - rect.top;
        gameState.current.playerY = Math.max(0, Math.min(CANVAS_HEIGHT - PADDLE_HEIGHT, mouseY - PADDLE_HEIGHT / 2));
    };

    const restart = () => {
        setPlayerScore(0);
        setAiScore(0);
        setWinner(null);
        resetBall();
        setIsPlaying(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        >
            <div className="relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-4 font-retro w-full max-w-[600px] mx-auto">
                    <div className="text-primary text-xl">YOU: {playerScore}</div>
                    <div className="text-xs text-gray-500">FIRST TO 5 WINS</div>
                    <div className="text-secondary text-xl">CPU: {aiScore}</div>
                </div>

                {/* Game Canvas */}
                <div className="relative border-4 border-white/20 shadow-[0_0_30px_rgba(255,0,255,0.2)]">
                    <canvas
                        ref={canvasRef}
                        width={CANVAS_WIDTH}
                        height={CANVAS_HEIGHT}
                        onMouseMove={handleMouseMove}
                        className="bg-black cursor-none block w-full max-w-[600px]"
                        style={{ imageRendering: 'pixelated' }}
                    />

                    {/* Overlays */}
                    <AnimatePresence>
                        {!isPlaying && !winner && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm"
                            >
                                <MousePointer2 size={48} className="text-accent mb-4 animate-bounce" />
                                <h2 className="text-2xl font-retro text-white mb-4">READY PLAYER ONE</h2>
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="btn-retro"
                                >
                                    START MATCH
                                </button>
                            </motion.div>
                        )}

                        {winner && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md"
                            >
                                <h2 className={`text-4xl font-retro mb-6 glow-text ${winner === 'PLAYER' ? 'text-success' : 'text-primary'}`}>
                                    {winner === 'PLAYER' ? 'VICTORY!' : 'DEFEAT'}
                                </h2>
                                <div className="flex gap-4">
                                    <button onClick={restart} className="btn-retro flex items-center gap-2">
                                        <RefreshCcw size={16} /> REMATCH
                                    </button>
                                    <button onClick={onClose} className="px-6 py-3 border-2 border-gray-600 text-gray-400 font-retro text-xs hover:bg-gray-800 transition-colors">
                                        EXIT
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer */}
                <div className="mt-4 flex justify-between items-center text-gray-400 font-tech text-sm px-2">
                    <span>USE MOUSE TO MOVE PADDLE</span>
                    <button onClick={onClose} className="hover:text-white flex items-center gap-1">
                        <X size={16} /> QUIT GAME
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
