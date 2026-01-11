import React, { useState } from 'react';
import { ClaimButton } from "thirdweb/react";
import { useActiveAccount } from "thirdweb/react";
import { client, nftContract } from "./client";
import { defineChain } from "thirdweb/chains";

// Component for claiming a specific NFT
interface ClaimNFTCardProps {
  tokenId: bigint;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}

const ClaimNFTCard: React.FC<ClaimNFTCardProps> = ({
  tokenId,
  name,
  description,
  imageUrl,
  category
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const activeAccount = useActiveAccount();

  return (
    <div className="super-glass rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all group">
      {/* NFT Image */}
      <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full">
          <span className="text-xs font-orbitron font-bold text-purple-400 uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>

      {/* NFT Info */}
      <div className="p-6 space-y-4">
        {/* Token ID Badge */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-orbitron font-bold tracking-widest text-purple-400 uppercase">
            Belt #{tokenId.toString()}
          </span>
          <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
            Available
          </span>
        </div>

        {/* NFT Name */}
        <h3 className="text-xl font-orbitron font-black text-white leading-tight">
          {name}
        </h3>

        {/* NFT Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Quantity Selector */}
        <div className="pt-4 border-t border-white/10">
          <label className="block text-sm font-orbitron font-bold text-gray-300 mb-2 uppercase tracking-wider">
            Quantity
          </label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-bold transition-all"
              disabled={quantity <= 1}
            >
              -
            </button>
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
              className="flex-1 bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-center text-white font-orbitron font-bold focus:outline-none focus:border-purple-600 transition-all"
            />
            <button
              onClick={() => setQuantity(Math.min(10, quantity + 1))}
              className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-bold transition-all"
              disabled={quantity >= 10}
            >
              +
            </button>
          </div>
        </div>

        {/* Claim Button */}
        <div className="pt-2">
          {activeAccount ? (
            <ClaimButton
              contractAddress={nftContract.address}
              chain={defineChain(11155111)}
              client={client}
              claimParams={{
                type: "ERC1155",
                quantity: BigInt(quantity),
                tokenId: tokenId,
              }}
              className="!w-full !px-6 !py-4 !bg-gradient-to-r !from-purple-600 !to-pink-600 !hover:from-purple-500 !hover:to-pink-500 !text-white !font-orbitron !font-bold !text-sm !tracking-wider !uppercase !rounded-lg !transition-all !shadow-lg !shadow-purple-600/30 !hover:shadow-purple-600/50 !hover:-translate-y-0.5 !transform !active:scale-95"
              onTransactionConfirmed={() => {
                alert("NFT claimed successfully!");
              }}
            >
              CLAIM BELT
            </ClaimButton>
          ) : (
            <div className="w-full px-6 py-4 bg-white/5 border border-white/10 text-gray-500 font-orbitron font-bold text-sm tracking-wider uppercase rounded-lg text-center cursor-not-allowed">
              <i className="fas fa-wallet mr-2"></i>
              Connect Wallet to Claim
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Claim Page Component
const ClaimNFTPage: React.FC = () => {
  const activeAccount = useActiveAccount();

  // Championship belt data (this would ideally come from your contract metadata)
  const availableBelts = [
    {
      tokenId: BigInt(0),
      name: "THE SILICON SOVEREIGN",
      category: "AI & DATA",
      description: "Forged for the masters of neural networks and decentralized data silos. Awarded to the protocol that bridges the gap between intelligence and the chain.",
      imageUrl: "https://raw.githubusercontent.com/mikky69/web3-battle-series/f038bf18f378e8c201447ad4570009369bc6582d/NFT-images/AI%20AND%20DATA.jpg",
    },
    {
      tokenId: BigInt(1),
      name: "LIQUIDITY LEGEND",
      category: "DEFI",
      description: "The titan of the open financial system. Awarded to the protocol that best manages capital efficiency and yield innovation.",
      imageUrl: "https://raw.githubusercontent.com/mikky69/web3-battle-series/f038bf18f378e8c201447ad4570009369bc6582d/NFT-images/DEFI.jpg",
    },
    {
      tokenId: BigInt(2),
      name: "METAVERSE MONARCH",
      category: "GAMEFI & METAVERSE",
      description: "The ultimate prize for digital worlds. Held by the project that builds the most immersive, sustainable, and fair gaming ecosystem.",
      imageUrl: "https://raw.githubusercontent.com/mikky69/web3-battle-series/f038bf18f378e8c201447ad4570009369bc6582d/NFT-images/GAMEFI%20AND%20METAVERSE.jpg",
    },
    {
      tokenId: BigInt(3),
      name: "INFRASTRUCTURE ICON",
      category: "L1 & L2",
      description: "The foundation of the decentralized web. This belt recognizes the architectural brilliance required to scale the future of global computation.",
      imageUrl: "https://raw.githubusercontent.com/mikky69/web3-battle-series/f038bf18f378e8c201447ad4570009369bc6582d/NFT-images/L1%20L2.jpg",
    },
    {
      tokenId: BigInt(4),
      name: "CULTURE CHAMPION",
      category: "MEMECOINS",
      description: "The belt of the people. Awarded to the community-driven force that transforms internet culture into a formidable economic movement.",
      imageUrl: "https://raw.githubusercontent.com/mikky69/web3-battle-series/f038bf18f378e8c201447ad4570009369bc6582d/NFT-images/MEMECOINS.jpg",
    },
    {
      tokenId: BigInt(5),
      name: "VALUE VELOCITY",
      category: "PAYMENT",
      description: "Frictionless, borderless, and instantaneous. This trophy belongs to the pioneer of the most efficient on-chain transaction layer.",
      imageUrl: "https://raw.githubusercontent.com/mikky69/web3-battle-series/f038bf18f378e8c201447ad4570009369bc6582d/NFT-images/PAYMENT.jpg",
    },
    {
      tokenId: BigInt(6),
      name: "PEGGED POWERHOUSE",
      category: "STABLECOINS",
      description: "The anchor of the crypto economy. Held by the issuer of the most resilient and transparent store of value in the Web3 Battle Series.",
      imageUrl: "https://raw.githubusercontent.com/mikky69/web3-battle-series/f038bf18f378e8c201447ad4570009369bc6582d/NFT-images/STABLECOINS.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-[2px] bg-purple-600"></div>
          <span className="text-xs font-orbitron font-black tracking-[0.5em] text-purple-500 uppercase">
            Claim Your Belt
          </span>
          <div className="w-12 h-[2px] bg-purple-600"></div>
        </div>

        <h2 className="text-5xl md:text-6xl font-orbitron font-black text-white mb-6 uppercase">
          Claim Championship <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Belts</span>
        </h2>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Choose your championship belt and claim your piece of Web3 Battle Series history
        </p>

        {/* Wallet Status */}
        {activeAccount ? (
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-600/10 border border-green-500/30 rounded-full">
            <i className="fas fa-check-circle text-green-400"></i>
            <span className="text-green-400 font-orbitron font-bold text-sm uppercase tracking-wider">
              Wallet Connected
            </span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600/10 border border-yellow-500/30 rounded-full">
            <i className="fas fa-exclamation-circle text-yellow-400"></i>
            <span className="text-yellow-400 font-orbitron font-bold text-sm uppercase tracking-wider">
              Connect Wallet to Claim
            </span>
          </div>
        )}
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {availableBelts.map((belt) => (
          <ClaimNFTCard
            key={belt.tokenId.toString()}
            tokenId={belt.tokenId}
            name={belt.name}
            description={belt.description}
            imageUrl={belt.imageUrl}
            category={belt.category}
          />
        ))}
      </div>
    </section >
  );
};

export default ClaimNFTPage;
