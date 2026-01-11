import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain, base, baseSepolia } from "thirdweb/chains";

const clientId = import.meta.env.VITE_TEMPLATE_CLIENT_ID;
const nftAddress = import.meta.env.VITE_TEMPLATE_NFT_CONTRACT_ADDRESS;
const chain = defineChain(11155111) //sepolia testnet for testing. Change to base mainnet later

export const client = createThirdwebClient({
  clientId: clientId,
});

// connect to your contract
export const nftContract = getContract({
  client,
  chain,
  address: nftAddress,
});
