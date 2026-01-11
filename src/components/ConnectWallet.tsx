import { client } from "./client";
import { useConnect, useActiveAccount, useActiveWallet, useDisconnect } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

/**
 * Custom ConnectWallet component using thirdweb hooks
 * @returns {JSX.Element}
 */
export default function ConnectWallet() {
  const { connect, isConnecting } = useConnect();
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const { disconnect } = useDisconnect();

  const buttonStyles = "px-6 py-3 rounded bg-purple-600/10 border border-purple-500/50 text-white font-orbitron font-black text-[10px] tracking-widest uppercase hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all flex items-center gap-3 active:scale-95 whitespace-nowrap";

  const handleConnect = () => {
    connect(async () => {
      const metamask = createWallet("io.metamask");
      await metamask.connect({ client });
      return metamask;
    });
  };

  const handleDisconnect = () => {
    if (wallet) {
      disconnect(wallet);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div>
      <button
        onClick={account ? handleDisconnect : handleConnect}
        disabled={isConnecting}
        className={buttonStyles}
      >
        <i className={`fas ${account ? 'fa-wallet text-green-400' : 'fa-link'}`}></i>
        {isConnecting
          ? "Connecting..."
          : account
            ? formatAddress(account.address)
            : "Connect Wallet"
        }
      </button>
    </div>
  );
}