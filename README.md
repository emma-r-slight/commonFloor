# CommonFloor DAO Hackathon Project 🏢

Decentralized Autonomous Organization (DAO) for body corporate governance, vendor bidding, and treasury management using NZDD on Sepolia testnet.

## Features
- ✅ Hardhat + TypeScript environment
- ✅ Ethers.js v6 with deploy scripts
- ✅ Deploy of VendorBid smart contract
- ✅ Integration with real NZDD token on Sepolia (0xE91d143072fc5e92e6445f18aa35DBd43597340c)
- ✅ Deploy/test automation via Hardhat scripts

## Tech Stack
- Solidity 0.8.x
- Hardhat + TypeScript
- Ethers.js v6
- Sepolia testnet + Infura RPC

## How to Run

### 1️⃣ Install dependencies
```bash
npm install

##  2️⃣ Configure .env
PRIVATE_KEY=0xyourprivatekey
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

3️⃣ Compile contracts
npx hardhat compile

4️⃣ Deploy to Sepolia
npx hardhat run scripts/deploy.ts --network sepolia

5️⃣ Interact via Hardhat Console
npx hardhat console --network sepolia
