import React from 'react';

const HomeSection: React.FC = () => {
  const copyToClipboard = (text: string, buttonId: string) => {
    navigator.clipboard.writeText(text);
    const button = document.getElementById(buttonId);
    if (button) {
      const originalText = button.textContent;
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    }
  };

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
            <a href="/propose-battle.html" className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-full text-xl shadow-2xl super-glass backdrop-blur-xl border border-purple-500/50">Propose Battle</a>
            <a href="/apply-judge.html" className="px-12 py-5 border-2 border-purple-400 hover:bg-purple-500/30 text-white font-bold rounded-full text-xl super-glass backdrop-blur-xl">Become Judge</a>
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

      {/* SUPPORT */}
      <section className="py-32 px-6">
        <h2 className="text-center text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-16 font-orbitron">Support the Series (Voluntary)</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="super-glass p-10 rounded-3xl text-center">
            <i className="fab fa-ethereum text-8xl text-purple-400 mb-6"></i>
            <p className="text-sm uppercase text-gray-300 mb-4 font-bold">EVM</p>
            <code className="block font-mono text-xs bg-black/60 px-6 py-4 rounded-2xl mb-5 break-all text-gray-300">0x86a247d4686274625b7d408d281c4515ff5532f9</code>
            <button 
              id="evm-copy"
              onClick={() => copyToClipboard('0x86a247d4686274625b7d408d281c4515ff5532f9', 'evm-copy')}
              className="text-purple-400 hover:text-white font-bold transition"
            >
              Copy
            </button>
          </div>
          <div className="super-glass p-10 rounded-3xl text-center">
            <i className="fab fa-bitcoin text-8xl text-orange-500 mb-6"></i>
            <p className="text-sm uppercase text-gray-300 mb-4 font-bold">Bitcoin</p>
            <code className="block font-mono text-xs bg-black/60 px-6 py-4 rounded-2xl mb-5 break-all text-gray-300">bc1qhzz8x6tak8nl2f6e6dhceyuwsj6tdg924cgjw2</code>
            <button 
              id="btc-copy"
              onClick={() => copyToClipboard('bc1qhzz8x6tak8nl2f6e6dhceyuwsj6tdg924cgjw2', 'btc-copy')}
              className="text-orange-400 hover:text-white font-bold transition"
            >
              Copy
            </button>
          </div>
          <div className="super-glass p-10 rounded-3xl text-center">
            <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana" className="w-32 mx-auto mb-6"/>
            <p className="text-sm uppercase text-gray-300 mb-4 font-bold">Solana</p>
            <code className="block font-mono text-xs bg-black/60 px-6 py-4 rounded-2xl mb-5 break-all text-gray-300">HXK1mAT99M7enBf2QQjJBpoFcPziRGxmfQxqJhzFzuNe</code>
            <button 
              id="sol-copy"
              onClick={() => copyToClipboard('HXK1mAT99M7enBf2QQjJBpoFcPziRGxmfQxqJhzFzuNe', 'sol-copy')}
              className="text-green-400 hover:text-white font-bold transition"
            >
              Copy
            </button>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="py-32 px-6 overflow-hidden bg-black/30">
        <h2 className="text-center text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-16 font-orbitron">
          Sponsors & Partners
        </h2>
        <div className="relative">
          <div className="flex animate-scroll gap-32 items-center">
            {[...Array(3)].map((_, repeat) => (
              <React.Fragment key={repeat}>
                <a href="https://x.com/CNCDDAO" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <img src="https://myimgs.org/storage/images/12524/cnc.jpeg" alt="CNC DAO" className="h-32 w-32 object-contain rounded-full ring-4 ring-purple-500/60 shadow-2xl opacity-90 hover:opacity-100 transition" />
                </a>
                <a href="https://x.com/0xParabolicDAO" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <img src="https://pbs.twimg.com/profile_images/1982158382262894593/fEetDFDh_400x400.jpg" alt="Parabolic DAO" className="h-32 w-32 rounded-full ring-4 ring-purple-500/60 shadow-2xl opacity-90 hover:opacity-100 transition" />
                </a>
                <a href="https://x.com/dvoiceofweb3" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <img src="https://myimgs.org/storage/images/12525/voice of web3.jpg" alt="Voice of Web3" className="h-32 w-32 object-contain rounded-full ring-4 ring-purple-500/60 shadow-2xl opacity-90 hover:opacity-100 transition" />
                </a>
                <a href="https://x.com/NovareAfrica" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <img src="https://myimgs.org/storage/images/12528/novare.png" alt="Novare Africa" className="h-32 w-32 object-contain rounded-full ring-4 ring-purple-500/60 shadow-2xl opacity-90 hover:opacity-100 transition" />
                </a>
                <a href="https://x.com/CryptoLoopHQ" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                  <img src="https://myimgs.org/storage/images/12529/crypto loop.png" alt="Crypto Loop" className="h-32 w-32 object-contain rounded-full ring-4 ring-purple-500/60 shadow-2xl opacity-90 hover:opacity-100 transition" />
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
          .animate-scroll { animation: scroll 50s linear infinite; display: flex; width: max-content; }
          .animate-scroll:hover { animation-play-state: paused; }
        `}</style>
      </section>

      {/* FOUNDERS */}
      <section className="py-32 px-6">
        <h2 className="text-center text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-20 font-orbitron">
          Founders
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="super-glass p-10 rounded-3xl text-center">
            <img src="https://myimgs.org/storage/images/12457/MIK.jpg" alt="Engr. Mikailu Samuel Nadro" className="w-48 h-48 mx-auto rounded-full ring-4 ring-purple-500/50 mb-6 object-cover"/>
            <h3 className="text-3xl font-bold mb-2 text-white">Engr. Mikailu Samuel Nadro</h3>
            <p className="text-xl text-purple-400 mb-6 font-orbitron">@0xParabolicDAO</p>
            <p className="text-gray-300 leading-relaxed">
              Founder & CTO of Parabolic DAO. Blockchain engineer, lecturer at Modibbo Adama University, and published researcher (IEEE Blockchain, Crypto Research Journal). 
              Trained 500+ students in Solidity, Rust, and Web3 across Northern Nigeria. Co-founder of FreeLanceDAO on Solana & Hedera. 
              Building transparent, high-stakes entertainment in Web3.
            </p>
          </div>
          <div className="super-glass p-10 rounded-3xl text-center">
            <img src="https://myimgs.org/storage/images/12523/success.png" alt="Success Ola-Ojo" className="w-48 h-48 mx-auto rounded-full ring-4 ring-purple-500/50 mb-6 object-cover"/>
            <h3 className="text-3xl font-bold mb-2 text-white">Success Ola-Ojo</h3>
            <p className="text-xl text-purple-400 mb-6 font-orbitron">@Web3Geek</p>
            <p className="text-gray-300 leading-relaxed">
              Community Builder & Blockchain Educator. Host of The Voice of Web3, taking blockchain education to the grassroots. 
              Regional Captain for SuperteamNG (North East & North West). Helps top Web3 brands grow inclusive, engaged communities. 
              Believes "No matter how far you go, it's still day one."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
