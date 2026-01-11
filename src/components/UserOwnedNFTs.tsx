import React from 'react';
import { useReadContract, useActiveAccount } from "thirdweb/react";
import { NFTProvider, NFTMedia, NFTDescription, NFTName } from "thirdweb/react";
import { getOwnedNFTs } from "thirdweb/extensions/erc1155";
import { nftContract } from "./client";

/**
 * Component to display a single NFT card with quantity owned
 */
const OwnedNFTCard: React.FC<{ tokenId: bigint; quantityOwned: bigint }> = ({ tokenId, quantityOwned }) => {
  return (
    <NFTProvider contract={nftContract} tokenId={tokenId}>
      <div className="super-glass rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 transform group relative">
        {/* Quantity Badge */}
        <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg">
          <span className="text-white font-orbitron font-bold text-sm">
            ×{quantityOwned.toString()}
          </span>
        </div>

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
            <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
              Owned
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
        </div>
      </div>
    </NFTProvider>
  );
};

/**
 * Component to display user's owned NFTs
 */
const UserOwnedNFTs: React.FC = () => {
  const activeAccount = useActiveAccount();

  // Get owned NFTs for the active account  
  const { data: ownedNFTs, isPending, error } = useReadContract(getOwnedNFTs, {
    contract: nftContract,
    address: activeAccount?.address as string,
    start: 0, // Start from first NFT
    count: 100, // Get up to 100 NFTs (covers all 7 token IDs with multiple quantities)
    queryOptions: {
      enabled: !!activeAccount?.address, // Only run if wallet is connected
    },
  });

  if (!activeAccount) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="super-glass p-16 rounded-3xl border border-purple-500/20 text-center">
          <i className="fas fa-wallet text-7xl text-purple-500/30 mb-6"></i>
          <h3 className="text-3xl font-orbitron font-black text-white mb-4">Connect Your Wallet</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Connect your wallet to view your championship NFT collection
          </p>
        </div>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent"></div>
          <p className="mt-6 text-xl text-gray-400 font-orbitron">Loading Your Collection...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="super-glass p-12 rounded-3xl border border-red-500/20 text-center">
          <i className="fas fa-exclamation-triangle text-5xl text-red-500 mb-4"></i>
          <p className="text-xl text-red-400 font-orbitron">Failed to load your NFTs</p>
          <p className="text-gray-500 mt-2">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!ownedNFTs || ownedNFTs.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="super-glass p-16 rounded-3xl border border-purple-500/20 text-center">
          <i className="fas fa-trophy text-7xl text-purple-500/30 mb-6"></i>
          <h3 className="text-3xl font-orbitron font-black text-white mb-4">No Championship Belts Yet</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            You don't own any championship belts yet. Participate in tournaments to earn these exclusive NFTs!
          </p>
          <a
            href="#waitlist"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-orbitron font-bold text-sm tracking-wider uppercase rounded-lg transition-all shadow-lg shadow-purple-600/30"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-[2px] bg-purple-600"></div>
          <span className="text-xs font-orbitron font-black tracking-[0.5em] text-purple-500 uppercase">
            Your Collection
          </span>
          <div className="w-12 h-[2px] bg-purple-600"></div>
        </div>

        <h2 className="text-5xl md:text-6xl font-orbitron font-black text-white mb-4 uppercase">
          My Championship <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Belts</span>
        </h2>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          You own {ownedNFTs.length} {ownedNFTs.length === 1 ? 'championship belt' : 'championship belts'}
        </p>
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ownedNFTs.map((nft) => (
          <OwnedNFTCard
            key={nft.id.toString()}
            tokenId={nft.id}
            quantityOwned={nft.quantityOwned || BigInt(1)}
          />
        ))}
      </div>

      <div className="mt-20 pt-16 border-t border-white/5">
        <div className="super-glass p-8 rounded-2xl">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">Connected Wallet</p>
              <p className="text-white font-mono text-sm break-all">{activeAccount.address}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-2">Total Owned</p>
              <p className="text-3xl font-orbitron font-black text-purple-400">{ownedNFTs.length}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserOwnedNFTs;
