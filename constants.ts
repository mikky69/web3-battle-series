import { Belt, BeltCategory } from './types.ts';

const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/mikky69/web3-battle-series/f038bf18f378e8c201447ad4570009369bc6582d/NFT-images";

export const BELTS: Belt[] = [
  {
    id: '1',
    name: 'THE SILICON SOVEREIGN',
    category: BeltCategory.AI_DATA,
    description: 'Forged for the masters of neural networks and decentralized data silos. Awarded to the protocol that bridges the gap between intelligence and the chain.',
    mediaUrl: `${GITHUB_RAW_BASE}/AI%20AND%20DATA.jpg`,
    mediaType: 'image',
    color: 'from-blue-600 to-indigo-900'
  },
  {
    id: '2',
    name: 'LIQUIDITY LEGEND',
    category: BeltCategory.DEFI,
    description: 'The titan of the open financial system. Awarded to the protocol that best manages capital efficiency and yield innovation.',
    mediaUrl: `${GITHUB_RAW_BASE}/DEFI.jpg`,
    mediaType: 'image',
    color: 'from-purple-600 to-violet-900'
  },
  {
    id: '3',
    name: 'METAVERSE MONARCH',
    category: BeltCategory.GAMEFI_METAVERSE,
    description: 'The ultimate prize for digital worlds. Held by the project that builds the most immersive, sustainable, and fair gaming ecosystem.',
    mediaUrl: `${GITHUB_RAW_BASE}/GAMEFI%20AND%20METAVERSE.jpg`,
    mediaType: 'image',
    color: 'from-pink-600 to-purple-800'
  },
  {
    id: '4',
    name: 'INFRASTRUCTURE ICON',
    category: BeltCategory.L1_L2_INFRA,
    description: 'The foundation of the decentralized web. This belt recognizes the architectural brilliance required to scale the future of global computation.',
    mediaUrl: `${GITHUB_RAW_BASE}/L1%20L2.jpg`,
    mediaType: 'image',
    color: 'from-emerald-600 to-teal-900'
  },
  {
    id: '5',
    name: 'CULTURE CHAMPION',
    category: BeltCategory.MEMECOINS,
    description: 'The belt of the people. Awarded to the community-driven force that transforms internet culture into a formidable economic movement.',
    mediaUrl: `${GITHUB_RAW_BASE}/MEMECOINS.jpg`,
    mediaType: 'image',
    color: 'from-yellow-500 to-orange-700'
  },
  {
    id: '6',
    name: 'VALUE VELOCITY',
    category: BeltCategory.PAYMENT,
    description: 'Frictionless, borderless, and instantaneous. This trophy belongs to the pioneer of the most efficient on-chain transaction layer.',
    mediaUrl: `${GITHUB_RAW_BASE}/PAYMENT.jpg`,
    mediaType: 'image',
    color: 'from-cyan-500 to-blue-700'
  },
  {
    id: '7',
    name: 'PEGGED POWERHOUSE',
    category: BeltCategory.STABLECOINS,
    description: 'The anchor of the crypto economy. Held by the issuer of the most resilient and transparent store of value in the Web3 Battle Series.',
    mediaUrl: `${GITHUB_RAW_BASE}/STABLECOINS.jpg`,
    mediaType: 'image',
    color: 'from-gray-400 to-slate-800'
  }
];
