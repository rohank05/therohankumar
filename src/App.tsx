import { useState } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { SnakeGame } from './components/SnakeGame';
import { PongGame } from './components/PongGame';
import { ContraGame } from './components/ContraGame';
import { ArcadeMenu } from './components/ArcadeMenu';
import { EasterEgg } from './components/EasterEgg';
import { AnimatePresence } from 'framer-motion';

type GameType = 'SNAKE' | 'PONG' | 'CONTRA' | null;

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeGame, setActiveGame] = useState<GameType>(null);

  const launchArcade = () => setShowMenu(true);

  const closeAll = () => {
    setShowMenu(false);
    setActiveGame(null);
  };

  const handleGameSelect = (game: GameType) => {
    setShowMenu(false);
    setActiveGame(game);
  };

  return (
    <Layout>
      <EasterEgg onUnlock={launchArcade} />

      <AnimatePresence>
        {showMenu && (
          <ArcadeMenu
            onSelectGame={handleGameSelect}
            onClose={() => setShowMenu(false)}
          />
        )}
        {activeGame === 'SNAKE' && <SnakeGame onClose={closeAll} />}
        {activeGame === 'PONG' && <PongGame onClose={closeAll} />}
        {activeGame === 'CONTRA' && <ContraGame onClose={closeAll} />}
      </AnimatePresence>

      <Hero onStartGame={launchArcade} />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;
