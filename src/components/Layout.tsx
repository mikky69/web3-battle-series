import React, { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onViewChange: (view: 'home' | 'nfts') => void;
  currentView: 'home' | 'nfts';
}

const Layout: React.FC<LayoutProps> = ({ children, onViewChange, currentView }) => {
  const [showToast, setShowToast] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setIsMobileMenuOpen(false);
  };

  const connectWallet = () => {
    if (walletAddress) {
      setWalletAddress(null);
    } else {
      // Simulate wallet connection
      setWalletAddress('0x71C...4e9c');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.super-glass').forEach(panel => {
        const rect = panel.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          panel.classList.add('scrolled');
        } else {
          panel.classList.remove('scrolled');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative bg-[#000] text-[#e2e8f0] overflow-x-hidden">
      <div className="crystal-grid"></div>

      {/* Coming Soon Toast */}
      {showToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-purple-600 text-white px-8 py-4 rounded-full font-orbitron font-black text-[12px] tracking-widest shadow-2xl shadow-purple-600/50 animate-bounce uppercase">
          Feature Coming Soon
        </div>
      )}

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div 
            className="flex items-center gap-5 cursor-pointer group" 
            onClick={() => onViewChange('home')}
          >
            <div className="relative">
              <img src="https://pbs.twimg.com/profile_images/1982158382262894593/fEetDFDh_400x400.jpg" alt="Parabolic DAO" className="w-14 h-14 rounded-full ring-4 ring-purple-600/60 transition-all group-hover:ring-purple-400 group-hover:scale-105" />
              <div className="absolute -inset-1 bg-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent hidden sm:inline font-orbitron tracking-tighter uppercase">Web3 Battle Series</span>
          </div>
          
          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex items-center gap-10 text-[13px] font-orbitron font-black tracking-widest uppercase">
              <button onClick={() => onViewChange('home')} className={`${currentView === 'home' ? 'text-purple-400 border-b-2 border-purple-400 pb-1' : 'text-white'} hover:text-purple-400 transition`}>Home</button>
              <button onClick={handleComingSoon} className="text-white hover:text-purple-400 transition">Battles</button>
              <button onClick={() => onViewChange('nfts')} className={`${currentView === 'nfts' ? 'text-purple-400 border-b-2 border-purple-400 pb-1' : 'text-white'} hover:text-purple-400 transition`}>NFT Belts</button>
              <button onClick={handleComingSoon} className="text-white hover:text-purple-400 transition">Stats</button>
              <button onClick={handleComingSoon} className="text-white hover:text-purple-400 transition">DAO</button>
            </nav>

            <button 
              onClick={connectWallet}
              className="px-6 py-3 rounded bg-purple-600/10 border border-purple-500/50 text-white font-orbitron font-black text-[10px] tracking-widest uppercase hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all flex items-center gap-3 active:scale-95 whitespace-nowrap"
            >
              <i className={`fas ${walletAddress ? 'fa-wallet text-green-400' : 'fa-link'}`}></i>
              {walletAddress ? walletAddress : 'Connect Wallet'}
            </button>
            
            <button id="burger" onClick={() => setIsMobileMenuOpen(true)} className="text-2xl text-purple-400 lg:hidden hover:scale-110 transition-transform">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-[60] bg-black/98 backdrop-blur-3xl flex items-center justify-center transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="text-center space-y-10 text-3xl font-orbitron font-black uppercase tracking-widest">
          <button onClick={() => { onViewChange('home'); setIsMobileMenuOpen(false); }} className={`block w-full ${currentView === 'home' ? 'text-white' : 'text-purple-500'} hover:text-white`}>Home</button>
          <button onClick={handleComingSoon} className="block w-full text-purple-500 hover:text-white">Battles</button>
          <button onClick={() => { onViewChange('nfts'); setIsMobileMenuOpen(false); }} className={`block w-full ${currentView === 'nfts' ? 'text-white' : 'text-purple-500'} hover:text-white`}>NFT Belts</button>
          <button onClick={handleComingSoon} className="block w-full text-purple-500 hover:text-white">Stats</button>
          <button onClick={handleComingSoon} className="block w-full text-purple-500 hover:text-white">DAO</button>
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-10 right-10 text-4xl text-purple-400 hover:rotate-90 transition-transform">×</button>
        </div>
      </div>

      <main className="relative z-10">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="py-32 px-6 border-t border-purple-900/40 footer-bg relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-center md:text-left relative z-10">
          <div>
            <h3 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4 font-orbitron uppercase tracking-tighter">Web3 Battle Series</h3>
            <p className="text-[#f0f0ff] leading-relaxed font-medium">The first boxing-style, judge-decided tournament in Web3.<br/>May the best protocol win on facts, not hype.</p>
          </div>
          <div>
            <h4 className="text-sm font-black text-purple-300 mb-6 font-orbitron uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-[#f0f0ff] font-medium">
              <li><button onClick={() => onViewChange('home')} className="hover:text-white transition">Home</button></li>
              <li><button onClick={handleComingSoon} className="hover:text-white transition">Propose Battle</button></li>
              <li><button onClick={handleComingSoon} className="hover:text-white transition">Become Judge</button></li>
              <li><a href="https://docs.google.com/document/d/1-lUXO-x-CM5Exf4R4Qv6nzsaqY_pVweF8PUmSpgb45w/edit?usp=sharing" target="_blank" className="hover:text-white transition">Rulebook</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-black text-purple-300 mb-6 font-orbitron uppercase tracking-widest">Founders</h4>
            <p className="text-[#f0f0ff] mb-2 font-medium"><a href="https://x.com/0xParabolicDAO" target="_blank" className="hover:text-white">@0xParabolicDAO</a></p>
            <p className="text-[#f0f0ff] font-medium"><a href="https://x.com/Web3Geek" target="_blank" className="hover:text-white">@Web3Geek</a></p>
          </div>
          <div>
            <h4 className="text-sm font-black text-purple-300 mb-6 font-orbitron uppercase tracking-widest">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-8 text-3xl mb-8">
              <a href="https://x.com/0xParabolicDAO" target="_blank" className="text-purple-300 hover:text-white transition"><i className="fab fa-x-twitter"></i></a>
              <a href="mailto:0xparabolicdao@gmail.com" className="text-purple-300 hover:text-white transition"><i className="fas fa-envelope"></i></a>
            </div>
            <p className="text-[10px] text-[#f0f0ff] opacity-60 font-bold uppercase tracking-widest">© 2025 Parabolic DAO • All battles settled on-chain</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
