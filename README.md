# 🧟 DeadChain — Zombie Creation dApp

![Solidity](https://img.shields.io/badge/Solidity-0.8-blue?style=flat-square)
![Hardhat](https://img.shields.io/badge/Hardhat-Development-yellow?style=flat-square)
![Ethers.js](https://img.shields.io/badge/Ethers.js-Blockchain-purple?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat-square)

> A simple yet insightful Web3 dApp that demonstrates how user actions 
> translate into on-chain state changes using Ethereum smart contracts.

---

## 🌐 Live Demo
| Link | Status |
|------|--------|
| 🖥️ Frontend | [Coming Soon] |
| 📋 Contract (Testnet) | [Coming Soon] |

---

## 📸 Screenshots

> ![App Screenshot](./screenshots/demo.png)
> *(Add your screenshot here)*

---

## 🧠 Why this project?

At first glance, creating a "zombie" looks like a simple button click.

But under the hood, it represents:
- A **transaction signed by the user**
- A **state change on the blockchain**
- A **non-instant, asynchronous execution**

This project was built to understand:

👉 How frontend actions map to smart contract execution
👉 How user intent becomes blockchain state

---

## 🔍 What it does

- 🧟 Create zombies via smart contract
- 🔗 Connect wallet using MetaMask
- 📡 Interact with deployed contract using Ethers.js
- 🎮 Simple UI for triggering contract functions

---

## ⚙️ How it works (Flow)
User connects wallet (MetaMask)
↓
User clicks "Create Zombie"
↓
Frontend calls contract via Ethers.js
↓
Transaction signed in wallet
↓
Transaction sent to network
↓
Contract updates blockchain state
↓
UI reflects updated result
---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Solidity | Smart contract logic |
| Hardhat | Development & deployment |
| Ethers.js | Blockchain interaction |
| HTML/CSS/JS | Frontend UI |
| MetaMask | Wallet connection |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- MetaMask browser extension
- Git

### Installation

```bash
# Clone the repo
git clone https://github.com/Shrijeet8/deadchain-zombie-dapp.git

# Go into the project
cd deadchain-zombie-dapp

# Install dependencies
npm install
```

### Run Locally

```bash
# Start local blockchain
npx hardhat node

# Deploy contract (new terminal)
npx hardhat run scripts/deploy.js --network localhost

# Open index.html in browser
# Connect MetaMask to localhost:8545
```

---

## 🧪 Development Process

### 1. Smart Contract
- Wrote Solidity contract for zombie creation
- Stored zombie data on-chain
- Understood how state variables persist in EVM

### 2. Hardhat Setup
```bash
npx hardhat init
npx hardhat compile
```

### 3. Local Testing
```bash
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
```

### 4. Frontend Integration
- Connected MetaMask using Ethers.js
- Called contract functions from browser
- Handled async transaction flow

---

## 📋 Smart Contract Details

| Detail | Info |
|--------|------|
| Network | Hardhat Local / Sepolia Testnet |
| Contract Address | `Coming soon after testnet deploy` |
| Main Function | `createZombie(name)` |
| State Variable | `zombies[]` array on-chain |

---

## 🔮 Future Improvements

- [ ] Deploy on Sepolia testnet
- [ ] Add zombie battle feature  
- [ ] Add IPFS image storage for zombie NFTs
- [ ] Write complete Hardhat test suite
- [ ] Add zombie ownership tracking
- [ ] Upgrade to ERC721 (NFT standard)

---

## 🙏 Credits & Inspiration

- [CryptoZombies](https://cryptozombies.io/) — The best free 
  Solidity course out there. Teaches Web3 by building a 
  zombie game. Highly recommended for every blockchain beginner!

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to fork, learn, and build on top of it!

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Shrijeet8">Shrijeet</a>
</p>
