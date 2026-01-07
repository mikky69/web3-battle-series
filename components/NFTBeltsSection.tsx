import React, { useState } from 'react';
import Carousel from './Carousel.tsx';
import { BELTS } from '../constants.ts';

const NFTBeltsSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="relative pb-40">
      {/* Hero Header Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="w-12 h-[2px] bg-purple-600"></div>
              <span className="text-[11px] font-orbitron font-black tracking-[0.5em] text-purple-500 uppercase">Tournament Loot</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black tracking-tighter mb-10 leading-[0.85] text-white uppercase">
              CHAMPIONSHIP <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">NFT BELTS</span>
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl max-w-3xl font-medium leading-relaxed mb-8">
              Exclusive NFT Championship Belts awarded to tournament winners. <br />
              Own a piece of Web3 Battle Series history.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-12">
              <div className="px-6 py-3 rounded-full bg-purple-600/10 border border-purple-500/30 text-purple-400 font-orbitron font-bold text-xs tracking-widest uppercase animate-pulse">
                Coming Soon
              </div>
              <div className="flex items-center gap-3 text-gray-400 font-orbitron font-bold text-xs tracking-widest uppercase">
                <img src="https://opensea.io/static/images/logos/opensea-logo.svg" className="w-6 h-6 grayscale opacity-50" alt="OpenSea" />
                Launching on OpenSea (Base Network)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Carousel Showcase */}
      <section className="relative z-20">
        <Carousel items={BELTS} />
      </section>

      {/* Stats/Utility Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-40 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6 group">
            <div className="w-14 h-14 bg-purple-600/10 rounded-lg flex items-center justify-center border border-purple-500/20 text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all">
              <i className="fas fa-crown text-2xl"></i>
            </div>
            <h4 className="text-2xl font-orbitron font-black tracking-tight text-white uppercase">Champion Utility</h4>
            <p className="text-gray-500 text-base leading-relaxed font-medium">Holders gain access to the "Champion's Circle" DAO, influencing future match pairings and reward distributions.</p>
          </div>
          <div className="space-y-6 group">
            <div className="w-14 h-14 bg-blue-600/10 rounded-lg flex items-center justify-center border border-blue-500/20 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <i className="fas fa-microchip text-2xl"></i>
            </div>
            <h4 className="text-2xl font-orbitron font-black tracking-tight text-white uppercase">Base Integration</h4>
            <p className="text-gray-500 text-base leading-relaxed font-medium">Deployed on Coinbase's Base L2 for near-zero gas fees and high-speed settlement of tournament rewards.</p>
          </div>
          <div className="space-y-6 group">
            <div className="w-14 h-14 bg-cyan-600/10 rounded-lg flex items-center justify-center border border-cyan-500/20 text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white transition-all">
              <i className="fas fa-fingerprint text-2xl"></i>
            </div>
            <h4 className="text-2xl font-orbitron font-black tracking-tight text-white uppercase">1 of 1 Rarity</h4>
            <p className="text-gray-500 text-base leading-relaxed font-medium">Each belt category features only one "Sovereign" edition, making it one of the rarest artifacts in the Web3 ecosystem.</p>
          </div>
        </div>
      </section>

      {/* Notify Waitlist Section */}
      <section id="waitlist" className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative super-glass p-12 md:p-24 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-600/10 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[11px] font-orbitron font-black tracking-[0.5em] text-purple-500 uppercase mb-6">Join the Registry</div>
              <h2 className="text-5xl md:text-6xl font-orbitron font-black mb-8 leading-tight text-white uppercase">NOTIFY ME <br /> WHEN LIVE</h2>
              <p className="text-gray-400 text-lg max-w-md font-medium leading-relaxed">Be the first to receive the official minting schedule and exclusive early access to the championship collection.</p>
            </div>

            <form onSubmit={handleSubmit} className="relative space-y-5">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="ENTER EMAIL ADDRESS" 
                  required
                  className="flex-grow bg-white/5 border border-white/10 px-8 py-5 rounded focus:outline-none focus:border-purple-600 transition-all text-white placeholder:text-gray-700 font-bold"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="px-10 py-5 bg-purple-600 hover:bg-purple-500 font-orbitron font-black text-[11px] tracking-[0.2em] uppercase rounded transition-all shadow-xl shadow-purple-600/30 hover:-translate-y-1 transform active:scale-95 whitespace-nowrap">
                  {isSubmitted ? 'SUCCESS' : 'SUBSCRIBE'}
                </button>
              </div>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em] text-center sm:text-left">
                Secured by <span className="text-purple-500">Parabolic DAO Registry</span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NFTBeltsSection;
