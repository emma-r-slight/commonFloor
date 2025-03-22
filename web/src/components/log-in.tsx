"use client";

import React from "react";
import WalletConnectButton from "./wallet-connect-button";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function LoginPage() {
  const { isConnected } = useAccount();
  const router = useRouter();

  // Redirect to dashboard if already connected
  useEffect(() => {
    if (isConnected) {
      router.push("/dashboard");
    }
  }, [isConnected, router]);

  return (
    <div className="flex min-h-screen">
      {/* Left side - Building Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0">
          <Image
            src="/large-apartment.png"
            alt="Apartment building exterior"
            fill
            sizes="50vw"
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>

      {/* Right side - Login Content */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-16">
        <div className="w-full max-w-md space-y-16">
          {/* Logo and Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">Welcome to</h1>
            <h1 className="text-5xl font-serif italic">CommonFloor</h1>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="text-xl font-serif italic text-gray-700">
              Home is where the trust is
            </p>
          </div>

          {/* Wallet Connect Section */}
          <div className="text-center pt-8">
            <p className="text-gray-600 mb-6">
              Please connect your wallet to access the body corporate DAO
              features.
            </p>
            <WalletConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
}
