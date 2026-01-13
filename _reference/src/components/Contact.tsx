import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('MESSAGE_SENT_SUCCESSFULLY! 🎮');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: '#', color: '#ff00ff' },
    { icon: Linkedin, label: 'LinkedIn', url: '#', color: '#00ffff' },
    { icon: Twitter, label: 'Twitter', url: '#', color: '#00ff00' },
    { icon: Mail, label: 'Email', url: '#', color: '#ffff00' }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-6 py-2 border-4 border-[#ffff00] bg-black/50">
            <div className="flex items-center gap-2 text-[#ffff00]">
              <Send className="w-5 h-5" />
              <span className="text-xs">COMMUNICATION_CHANNEL</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl glow-text mb-4" style={{ color: '#ffff00' }}>
            CONTACT_ME
          </h2>
          <p className="text-xs" style={{ color: '#00ffff' }}>
            {'> INITIATE_CONVERSATION.EXE'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact form */}
          <div
            className="pixel-border p-6 bg-black/50"
            style={{ borderColor: '#ff00ff' }}
          >
            <h3 className="text-sm mb-6" style={{ color: '#ff00ff' }}>
              SEND_MESSAGE
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] mb-2" style={{ color: '#00ffff' }}>
                  {'> NAME:'}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black border-2 border-white/30 text-[10px] focus:border-[#ff00ff] focus:outline-none transition-colors"
                  style={{ color: '#00ffff', fontFamily: 'Press Start 2P, cursive' }}
                  placeholder="ENTER_YOUR_NAME"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] mb-2" style={{ color: '#00ffff' }}>
                  {'> EMAIL:'}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black border-2 border-white/30 text-[10px] focus:border-[#ff00ff] focus:outline-none transition-colors"
                  style={{ color: '#00ffff', fontFamily: 'Press Start 2P, cursive' }}
                  placeholder="YOUR@EMAIL.COM"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] mb-2" style={{ color: '#00ffff' }}>
                  {'> MESSAGE:'}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-black border-2 border-white/30 text-[10px] focus:border-[#ff00ff] focus:outline-none transition-colors resize-none"
                  style={{ color: '#00ffff', fontFamily: 'Press Start 2P, cursive', lineHeight: '1.8' }}
                  placeholder="TYPE_YOUR_MESSAGE_HERE..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full pixel-button text-xs py-3"
                style={{ color: '#ff00ff' }}
              >
                <Send className="inline w-4 h-4 mr-2" />
                TRANSMIT_MESSAGE
              </button>
            </form>
          </div>

          {/* Social links and info */}
          <div className="space-y-6">
            {/* Social links */}
            <div
              className="pixel-border p-6 bg-black/50"
              style={{ borderColor: '#00ffff' }}
            >
              <h3 className="text-sm mb-6" style={{ color: '#00ffff' }}>
                SOCIAL_LINKS
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="flex flex-col items-center gap-2 p-4 border-2 border-white/30 hover:border-current transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
                      style={{ color: social.color }}
                    >
                      <Icon className="w-8 h-8" />
                      <span className="text-[8px]">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional info */}
            <div
              className="pixel-border p-6 bg-black/50"
              style={{ borderColor: '#00ff00' }}
            >
              <h3 className="text-sm mb-4" style={{ color: '#00ff00' }}>
                PLAYER_INFO
              </h3>
              <div className="space-y-3 text-[10px]">
                <div className="flex gap-2">
                  <span style={{ color: '#ffff00' }}>▸ LOCATION:</span>
                  <span style={{ color: '#00ffff' }}>San Francisco, CA</span>
                </div>
                <div className="flex gap-2">
                  <span style={{ color: '#ffff00' }}>▸ STATUS:</span>
                  <span style={{ color: '#00ff00' }}>AVAILABLE_FOR_HIRE</span>
                </div>
                <div className="flex gap-2">
                  <span style={{ color: '#ffff00' }}>▸ RESPONSE_TIME:</span>
                  <span style={{ color: '#00ffff' }}>{'< 24_HOURS'}</span>
                </div>
                <div className="flex gap-2">
                  <span style={{ color: '#ffff00' }}>▸ TIMEZONE:</span>
                  <span style={{ color: '#00ffff' }}>PST (UTC-8)</span>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div
              className="pixel-border p-6 bg-black/50"
              style={{ borderColor: '#ffff00' }}
            >
              <div className="text-center">
                <div className="text-xs mb-2" style={{ color: '#ffff00' }}>
                  COLLABORATION_RATE
                </div>
                <div className="text-3xl glow-text mb-2" style={{ color: '#00ff00' }}>
                  100%
                </div>
                <div className="text-[8px]" style={{ color: '#00ffff' }}>
                  POSITIVE_FEEDBACK
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
