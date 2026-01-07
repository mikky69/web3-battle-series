
import React from 'react';

// Added missing component structure and default export to fix the error in App.tsx
const HomeSection: React.FC = () => {
  return (
    <div>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center pt-20 relative">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://myimgs.org/storage/images/12809/Gemini_Generated_Image_aq9lgtaq9lgtaq9l.png')", filter: "brightness(0.65)" }}></div>
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative z-10">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent leading-tight drop-shadow-2xl font-orbitron uppercase tracking-tighter">
            WEB3 BATTLE SERIES
          </h1>
          <p className="mt-8 text-2xl md:text-4xl text-white drop-shadow-lg font-medium">May the best protocol win</p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-full text-xl shadow-2xl super-glass backdrop-blur-xl border border-purple-500/50">Propose Battle</button>
            <button className="px-12 py-5 border-2 border-purple-400 hover:bg-purple-500/30 text-white font-bold rounded-full text-xl super-glass backdrop-blur-xl">Become Judge</button>
          </div>
          <a href="https://docs.google.com/document/d/1-lUXO-x-CM5Exf4R4Qv6nzsaqY_pVweF8PUmSpgb45w/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-10 text-purple-300 hover:text-white text-lg font-medium drop-shadow-lg">OFFICIAL RULEBOOK →</a>
        </div>
      </section>

      {/* WHAT IS */}
      <section className="py-32 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-16 font-orbitron">What is Web3 Battle Series?</h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-20 leading-relaxed">
          A boxing-inspired, judge-decided tournament that pits two similar Web3 projects against each other.<br/>
          No price pumping. No shilling. Just facts, data, and three independent judges using the professional 10-point must system.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="super-glass p-10 rounded-3xl text-center">
            <i className="fas fa-weight-hanging text-6xl text-purple-500 mb-6"></i>
            <h3 className="text-2xl font-bold text-white mb-4">Weight Classes</h3>
            <p className="text-gray-400">Projects compete in categories from DeFi to Memecoins, ensuring fair matchups based on sector.</p>
          </div>
          <div className="super-glass p-10 rounded-3xl text-center">
            <i className="fas fa-gavel text-6xl text-pink-500 mb-6"></i>
            <h3 className="text-2xl font-bold text-white mb-4">Independent Judges</h3>
            <p className="text-gray-400">Three industry experts score each battle based on tech, utility, and community strength.</p>
          </div>
          <div className="super-glass p-10 rounded-3xl text-center">
            <i className="fas fa-trophy text-6xl text-purple-400 mb-6"></i>
            <h3 className="text-2xl font-bold text-white mb-4">On-Chain Glory</h3>
            <p className="text-gray-400">Winners receive exclusive NFT Championship Belts and a spot in the Web3 Hall of Fame.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
