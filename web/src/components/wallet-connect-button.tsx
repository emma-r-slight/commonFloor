"use client";

import { useConnect, useAccount, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { useState } from "react";

export default function WalletConnectButton() {
  const { connect } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    try {
      setIsConnecting(true);
      await connect({ connector: injected() });
    } catch (error) {
      console.error("Failed to connect:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div className="my-5">
      {isConnected ? (
        <div className="flex items-center gap-3">
          <span className="font-mono bg-gray-100 px-3 py-1.5 rounded-md text-sm">
            {formatAddress(address!)}
          </span>
          <button
            onClick={() => disconnect()}
            className="bg-gray-100 border border-gray-300 text-gray-600 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          disabled={isConnecting}
          className="w-full py-4 bg-teal-600 text-white text-lg font-semibold rounded-md hover:bg-teal-700 transition-colors"
        >
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </button>
      )}
    </div>
  );
}
