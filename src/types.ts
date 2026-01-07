
export interface Belt {
  id: string;
  name: string;
  category: string;
  description: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  color: string;
}

export const BeltCategory = {
  AI_DATA: "AI and Data",
  GAMEFI_METAVERSE: "GameFi and Metaverse",
  L1_L2_INFRA: "L1 and L2 Infrastructure",
  MEMECOINS: "Memecoins",
  PAYMENT: "Payment",
  DEFI: "DeFi",
  STABLECOINS: "Stablecoins"
} as const;

export type BeltCategoryType = typeof BeltCategory[keyof typeof BeltCategory];
