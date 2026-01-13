import { Terminal, Zap, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 scanlines">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <Star
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
              color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'][Math.floor(Math.random() * 4)]
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Game-style UI element */}
        <div className="inline-block mb-8 px-6 py-2 border-4 border-[#ffff00] bg-black/50">
          <div className="flex items-center gap-2 text-[#ffff00]">
            <Terminal className="w-4 h-4 animate-pulse" />
            <span className="text-xs">PLAYER_1 ONLINE</span>
          </div>
        </div>

        {/* Main title with glowing effect */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 glow-text" style={{ color: '#ff00ff', lineHeight: '1.3' }}>
          FULL STACK
          <br />
          <span style={{ color: '#00ffff' }}>DEVELOPER</span>
        </h1>

        {/* Subtitle */}
        <div className="mb-8 text-sm md:text-base" style={{ color: '#00ff00', lineHeight: '1.8' }}>
          <p className="mb-4">{'> CRAFTING_DIGITAL_EXPERIENCES.EXE'}</p>
          <p className="text-xs" style={{ color: '#ffff00' }}>
            ▸ LOADING PORTFOLIO... [████████████] 100%
          </p>
        </div>

        {/* Stats display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {[
            { label: 'EXP POINTS', value: '5Y+', color: '#ff00ff' },
            { label: 'PROJECTS', value: '50+', color: '#00ffff' },
            { label: 'SKILLS', value: '20+', color: '#00ff00' },
            { label: 'LEVEL', value: 'MAX', color: '#ffff00' }
          ].map((stat, index) => (
            <div
              key={index}
              className="pixel-border p-4 bg-black/50"
              style={{ borderColor: stat.color }}
            >
              <div className="text-xs mb-2" style={{ color: stat.color }}>
                {stat.label}
              </div>
              <div className="text-xl" style={{ color: stat.color }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className="pixel-button text-sm"
            style={{ color: '#00ffff' }}
          >
            <Zap className="inline w-4 h-4 mr-2" />
            START_GAME
          </button>
          <button
            className="pixel-button text-sm"
            style={{ color: '#ff00ff' }}
          >
            VIEW_QUESTS
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="text-xs" style={{ color: '#00ffff' }}>
            ▼ SCROLL_DOWN ▼
          </div>
        </div>
      </div>
    </section>
  );
}
