import React from 'react';
import { useReadContract } from "thirdweb/react";
import { NFTProvider, NFTMedia, NFTDescription, NFTName } from "thirdweb/react";
import { nftContract } from "./client";

/**
 * Component to display a single NFT card
 */
const NFTCard: React.FC<{ tokenId: bigint }> = ({ tokenId }) => {
  return (
    <NFTProvider contract={nftContract} tokenId={tokenId}>
      <div className="super-glass rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 transform group">
        {/* NFT Image */}
        <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-purple-900/20 to-pink-900/20">
          <NFTMedia
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* NFT Info */}
        <div className="p-6 space-y-3">
          {/* Token ID Badge */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-orbitron font-bold tracking-widest text-purple-400 uppercase">
              Token #{tokenId.toString()}
            </span>
          </div>

          {/* NFT Name */}
          <h3 className="text-xl font-orbitron font-black text-white leading-tight">
            <NFTName />
          </h3>

          {/* NFT Description */}
          <div className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            <NFTDescription />
          </div>

          {/* View Details Button */}
          <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-orbitron font-bold text-xs tracking-wider uppercase rounded-lg transition-all shadow-lg shadow-purple-600/30">
            View Details
          </button>
        </div>
      </div>
    </NFTProvider>
  );
};

/**
 * Main NFT Gallery Component
 */
const NFTGallery: React.FC = () => {
  // Get the next token ID to mint (returns how many NFTs have been minted)
  const { data: nextTokenIdToMint, isPending, error } = useReadContract({
    contract: nftContract,
    method: "function nextTokenIdToMint() view returns (uint256)",
    params: [],
  });

  // Loading state
  if (isPending) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent"></div>
          <p className="mt-6 text-xl text-gray-400 font-orbitron">Loading Championship Belts...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="super-glass p-12 rounded-3xl border border-red-500/20 text-center">
          <i className="fas fa-exclamation-triangle text-5xl text-red-500 mb-4"></i>
          <p className="text-xl text-red-400 font-orbitron">Failed to load NFTs</p>
          <p className="text-gray-500 mt-2">{error.message}</p>
        </div>
      </div>
    );
  }

  // No NFTs minted yet
  const totalMinted = nextTokenIdToMint ? Number(nextTokenIdToMint) : 0;

  if (totalMinted === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="super-glass p-16 rounded-3xl border border-purple-500/20 text-center">
          <i className="fas fa-trophy text-7xl text-purple-500/30 mb-6"></i>
          <h3 className="text-3xl font-orbitron font-black text-white mb-4">No Championship Belts Minted Yet</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The first championship belts will be awarded to tournament winners.
            Be part of history by participating in the Web3 Battle Series!
          </p>
        </div>
      </div>
    );
  }

  // Create array of token IDs to display
  const tokenIds = Array.from({ length: totalMinted }, (_, i) => BigInt(i));

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Gallery Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-[2px] bg-purple-600"></div>
          <span className="text-xs font-orbitron font-black tracking-[0.5em] text-purple-500 uppercase">
            Minted Collection
          </span>
          <div className="w-12 h-[2px] bg-purple-600"></div>
        </div>

        <h2 className="text-5xl md:text-6xl font-orbitron font-black text-white mb-4 uppercase">
          Championship <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Belts</span>
        </h2>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          {totalMinted} {totalMinted === 1 ? 'Belt' : 'Belts'} awarded to tournament champions
        </p>
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tokenIds.map((tokenId) => (
          <NFTCard key={tokenId.toString()} tokenId={tokenId} />
        ))}
      </div>

      {/* Stats Footer */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/5">
        <div className="text-center">
          <div className="text-4xl font-orbitron font-black text-purple-400 mb-2">{totalMinted}</div>
          <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Total Minted</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-orbitron font-black text-pink-400 mb-2">7</div>
          <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Categories</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-orbitron font-black text-cyan-400 mb-2">∞</div>
          <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Legacy</div>
        </div>
      </div>
    </section>
  );
};

export default NFTGallery;
