# CommonFloor DAO Hackathon Project 🏢

Welcome to Commonfloor. We're making real-world-impact on disrupting current body corporate management by enhancing transparency in fund management and empowering every resident to have a voice and influence in decision-making.

Our innovative solution is a Decentralized Autonomous Organization (DAO) integrated in a webapp UI, built on the Sepolia testnet using NZDD. 

By leveraging this technology, CommonFloor empowers residents to collectively create and comment on proposals, vote on vendors, monitor expenditures, and even invest unused funds into yield-generating assets. Transforms how communities manage their shared resources and governance.

# Problem Statement:
How might we make spending and decision-making more transparent and accessible to all stakeholders?

Coming from our team member's negative experiences in dealing with body corp, we realise how many pain points there are. 
Since there are more and more people living in strata housing nowadays in Auckland (over 42k apartments in Auckland since 2023), we believe there's a critical need for change but they aren't addressed.

# Research
To validate our hypothesis of the pain points and ideas, we sent out the survey during hackathon and has gathered valuable feedback from 11 respondents.

## Key Takeaway: 
1. 100% of respondents have wanted to raise proposals to their body corp, and 88% of them feel like the process is either too complicated or too much hassel.
2. The top 2 features requested is 1) More transparency on how funds are used 2) Be able to create proposals
Results of the survey can be found here: https://drive.google.com/file/d/1QFLN7TD9L9302GaM1nHPGMSux5iIwVr2/view?usp=sharing

# MVP Features
1. Stakeholder Empowerment - Users are able to create, and vote for proposals.
2. Transparency - Users can track where each dollar goes, anytime.
3. Easy Access - One platform to stay informed and take actions.

# Design
We then designed wireframes for UI on figma. Design ink here: https://www.figma.com/design/gdhDpavaugM4UK21yPFoLV/Common-Floor---Product-design?node-id=101-385&t=oTJKakxc8qjCzs1l-1

## Tech Stack
- Solidity 0.8.x
- TypeScript
- Ethers.js v6
- Sepolia testnet + Infura RPC

## How to Run

### 1️⃣ Install dependencies
```bash
npm install
```
##  2️⃣ Configure .env
```bash
PRIVATE_KEY=0xyourprivatekey
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
```

3️⃣ Compile contracts
```bash
npx hardhat compile
```

4️⃣ Deploy to Sepolia
```bash
npx hardhat run scripts/deploy.ts --network sepolia
```

5️⃣ Interact via Hardhat Console
```bash
npx hardhat console --network sepolia
```

``
