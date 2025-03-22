"use client";

import React from "react";
import WalletConnectButton from "@/components/wallet-connect-button";
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
      <div className="hidden md:block md:w-1/2 relative rounded-r-3xl overflow-hidden">
        <div className="absolute inset-0 rounded-r-3xl overflow-hidden border-8 border-white">
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
            className="rounded-r-3xl"
          />
        </div>
      </div>

      {/* Right side - Login Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16">
        <div className="w-full max-w-md h-full flex flex-col justify-between">
          {/* Welcome Text */}
          <div className="text-left">
            <h1 className="text-5xl font-bold mb-10">Welcome to</h1>
          </div>
          <div>
            {/* Logo */}
            <div>
              <div className="relative h-24 w-full">
                <Image
                  src="/CommonFloorLogo.svg"
                  alt="CommonFloor"
                  fill
                  style={{ objectFit: "contain", objectPosition: "left" }}
                />
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xl font-serif italic text-gray-700 mt-4">
              Home is where the trust is
            </p>
            <div className="pt-8">
              <WalletConnectButton />
            </div>
          </div>

          {/* Login Button */}
        </div>
      </div>
    </div>
  );
}
