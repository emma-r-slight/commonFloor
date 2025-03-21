import { ethers } from "hardhat";

const tokenRegistry: Record<string, string> = {
  NZDD: "0xE91d143072fc5e92e6445f18aa35DBd43597340c" // ETH:0x2dD087589ce9C5b2D1b42e20d2519B3c8cF022b7
};

async function getAddress(symbol: string): Promise<string> {
  const tokenAddress = tokenRegistry[symbol.toUpperCase()];
  if (!tokenAddress) {
    throw new Error(`Token ${symbol} not found in registry`);
  }

  // Optional: validate on-chain symbol to ensure integrity
  const erc20 = await ethers.getContractAt("IERC20Metadata", tokenAddress);
  const onChainSymbol = await erc20.symbol();
  
  if (onChainSymbol.toUpperCase() !== symbol.toUpperCase()) {
    throw new Error(`On-chain symbol mismatch: expected ${symbol}, got ${onChainSymbol}`);
  }

  return tokenAddress;
}

async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();
  console.log("🚀 Deploying contracts with:", deployer.address);

  // Fetch NZDD address dynamically by symbol
  const nzddAddress = await getAddress("NZDD");
  console.log("✅ NZDD found at:", nzddAddress);

  // Deploy VendorBid Contract
  const VendorBid = await ethers.getContractFactory("VendorBid");
  const vendorBid = await VendorBid.deploy();
  await vendorBid.waitForDeployment();
  const vendorBidAddress = await vendorBid.getAddress();
  console.log("✅ VendorBid deployed at:", vendorBidAddress);

  // Interact with NZDD token balance
  const NZDD = await ethers.getContractAt("IERC20", nzddAddress);
  const deployerBalance = await NZDD.balanceOf(deployer.address);
  console.log(`💰 Deployer NZDD balance: ${ethers.formatUnits(deployerBalance, 18)} NZDD`);
}

main().catch((error) => {
  console.error("❌ Error during deployment:", error);
  process.exit(1);
});
