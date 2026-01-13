import { Heart, Terminal } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t-4 border-[#ff00ff] relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-6 h-6" style={{ color: '#00ffff' }} />
              <span className="text-sm" style={{ color: '#00ffff' }}>
                DEV_PORTFOLIO
              </span>
            </div>
            <p className="text-[10px] leading-relaxed" style={{ color: '#ffff00' }}>
              Crafting digital experiences one pixel at a time. Level up your projects with cutting-edge technology.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs mb-4" style={{ color: '#ff00ff' }}>
              QUICK_LINKS
            </h3>
            <ul className="space-y-2 text-[10px]">
              {['ABOUT', 'PROJECTS', 'EXPERIENCE', 'SKILLS', 'CONTACT'].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:translate-x-1 inline-block transition-transform"
                    style={{ color: '#00ffff' }}
                  >
                    {'> '}{link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Game stats */}
          <div>
            <h3 className="text-xs mb-4" style={{ color: '#00ff00' }}>
              GAME_STATS
            </h3>
            <div className="space-y-2 text-[10px]">
              <div className="flex justify-between">
                <span style={{ color: '#ffff00' }}>PROJECTS_BUILT:</span>
                <span style={{ color: '#00ff00' }}>50+</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: '#ffff00' }}>COFFEE_CONSUMED:</span>
                <span style={{ color: '#00ff00' }}>∞</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: '#ffff00' }}>BUGS_FIXED:</span>
                <span style={{ color: '#00ff00' }}>9999+</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: '#ffff00' }}>ACHIEVEMENT_SCORE:</span>
                <span style={{ color: '#00ff00' }}>MAX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t-2 border-white/20 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-[10px]">
            <span style={{ color: '#00ffff' }}>
              © {currentYear} DEV_PORTFOLIO.EXE
            </span>
            <span style={{ color: '#ff00ff' }}>|</span>
            <div className="flex items-center gap-1">
              <span style={{ color: '#ffff00' }}>MADE WITH</span>
              <Heart className="w-3 h-3 animate-pulse" style={{ color: '#ff0066' }} />
              <span style={{ color: '#ffff00' }}>AND LOTS OF CODE</span>
            </div>
          </div>
          <div className="mt-4 text-[8px]" style={{ color: '#00ff00' }}>
            {'> PRESS_START_TO_CONTINUE'}
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#ff00ff]" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[#00ffff]" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[#00ff00]" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#ffff00]" />
    </footer>
  );
}
