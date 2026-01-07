import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Belt } from '../types';

interface CarouselProps {
  items: Belt[];
}

const Carousel: React.FC<CarouselProps> = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    if (items.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = () => {
    if (items.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (isPaused || items.length === 0) return;
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, items.length]);

  if (items.length === 0) return null;

  return (
    <div 
      ref={carouselRef}
      className="relative w-full max-w-7xl mx-auto px-6 py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Dots */}
      <div className="absolute top-1/2 -right-4 md:-right-10 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-purple-500 h-12' : 'bg-white/10 hover:bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Main 3D Display Grid */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        {/* Left Side: 3D Belt Showcase */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative belt-perspective h-[450px] md:h-[650px]">
          {/* Holographic Base Effect */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hologram-base opacity-60"></div>
          
          <div className="relative w-full h-full flex items-center justify-center belt-3d-container">
            {items.map((belt, index) => (
              <div
                key={belt.id}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 scale-100 translate-y-0 rotate-y-0 pointer-events-auto blur-0' 
                    : 'opacity-0 scale-75 translate-y-32 -rotate-y-12 pointer-events-none blur-xl'
                }`}
              >
                {/* 3D Visual Box */}
                <div className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 super-glass shadow-2xl animate-3d-belt">
                  
                  {/* Category Label Overlay */}
                  <div className="absolute top-10 left-10 z-40">
                    <div className="px-6 py-3 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse shadow-[0_0_15px_#8b5cf6]"></div>
                      <span className="text-[10px] font-orbitron font-black tracking-[0.3em] uppercase text-white leading-none">{belt.category}</span>
                    </div>
                  </div>

                  {/* COMING SOON Badge Overlay */}
                  <div className="absolute bottom-10 right-10 z-40">
                    <div className="px-5 py-2 rounded-lg bg-purple-600 text-white font-orbitron font-black text-[9px] tracking-widest uppercase shadow-xl">
                      Coming Soon
                    </div>
                  </div>

                  {/* Media Display */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden bg-black">
                    {belt.mediaType === 'video' ? (
                      <video
                        className="w-full h-full object-cover opacity-90 transition-transform duration-[3000ms] ease-in-out group-hover:scale-110"
                        src={belt.mediaUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        className="w-full h-full object-cover opacity-90 transition-transform duration-[3000ms] ease-in-out group-hover:scale-110"
                        src={belt.mediaUrl}
                        alt={belt.name}
                      />
                    )}
                    {/* Subtle Overlay Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${belt.color} opacity-20 mix-blend-overlay`}></div>
                  </div>
                  
                  {/* Glass Reflection Finish */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10 pointer-events-none z-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Information Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          {items.map((belt, index) => (
            <div 
              key={`text-${belt.id}`}
              className={`transition-all duration-700 ease-out ${index === currentIndex ? 'block opacity-100 translate-x-0' : 'hidden opacity-0 translate-x-12'}`}
            >
              <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 text-[10px] font-black tracking-[0.4em] text-purple-400 uppercase mb-8">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                Web3 Battle Series Official Loot
              </div>
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-8 tracking-tighter leading-[0.9] text-white">
                {belt.name.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? 'text-purple-600' : 'text-white'}>{word} </span>
                ))}
              </h3>
              <h4 className="text-purple-500 font-orbitron font-bold text-sm tracking-[0.2em] uppercase mb-4">{belt.category}</h4>
              <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                {belt.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start">
                <button 
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-12 py-5 bg-white text-black font-orbitron font-black text-[11px] tracking-[0.2em] uppercase rounded hover:bg-purple-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95"
                >
                  NOTIFY ME WHEN LIVE
                </button>
                <div className="flex items-center gap-3 text-[10px] font-orbitron font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-6 py-4 rounded-xl border border-white/5">
                  <img src="https://opensea.io/static/images/logos/opensea-logo.svg" alt="OpenSea" className="w-5 h-5" />
                  OpenSea • Base Network
                </div>
              </div>

              {/* Belt Tier Stats */}
              <div className="mt-16 grid grid-cols-2 gap-10 border-t border-white/5 pt-12">
                <div>
                  <div className="text-[10px] font-bold text-gray-600 tracking-widest uppercase mb-2">Total Supply</div>
                  <div className="text-2xl font-orbitron font-black text-white">UNIQUE 1/1</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-600 tracking-widest uppercase mb-2">Network</div>
                  <div className="text-2xl font-orbitron font-black text-purple-500">BASE MAINNET</div>
                </div>
              </div>
            </div>
          ))}

          {/* Manual Controls */}
          <div className="flex gap-4 mt-16 justify-center lg:justify-start">
            <button onClick={prevSlide} className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition-all text-white group">
              <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
            </button>
            <div className="flex items-center gap-2 px-4 text-[10px] font-orbitron font-black text-gray-600">
              <span className="text-white">{currentIndex + 1}</span> / {items.length}
            </div>
            <button onClick={nextSlide} className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-600 transition-all text-white group">
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
