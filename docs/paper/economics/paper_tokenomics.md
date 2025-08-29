---
sidebar_position: 1
---

# Tokenomics

## **UPC Coin**

The primary coin of the UPCX network, **UPC**, functions as the base currency and utility token. The UPC coin serves several key purposes:

- **Transaction Fee Payment**: A small fee is charged for each transaction on the network, payable in UPC coins. These fees help secure the network and prevent spam transactions.
- **Smart Contracts and dApp Usage**: UPC coins are used to create and execute smart contracts on the UPCX network, making them essential assets for dApp users and developers.
- **Governance and Voting**: UPC coins play a significant role in network governance. By holding UPC coins, users can participate in **DPoS voting**, electing **Witnesses/BPs** and influencing decision-making processes on the network.

## **Asset Issuance and Multi-Asset System**

UPCX supports a **Multi-Asset System**, allowing for various cryptocurrencies and stablecoins, as well as enabling users and businesses to issue their own assets. This flexibility supports more use cases and business applications, facilitating adaptable asset management in the global financial environment.

**User Issued Assets (UIA)**

UPCX allows users to easily issue new assets known as **User Issued Assets (UIA)**, similar to ERC20 tokens on Ethereum. Users can issue UIAs through two main methods:

- **Custom Smart Contract Issuance**:
  Users can create their own smart contracts to issue UIAs, enabling custom features and asset characteristics. This is ideal for businesses looking to create tokens for loyalty programs or internal payment systems.
- **UIA Template Use**:
  To simplify asset issuance, UPCX provides **UIA templates**, allowing users to issue new assets without needing to write complex smart contracts. This approach makes asset issuance accessible even to users with limited technical knowledge.

**Stablecoins and Market Pegged Assets (MPA)**

UPCX offers the ability to issue **stablecoins** tied to fiat currencies or commodities. These assets are crucial for stable payments and asset storage, particularly in financial applications and global payment systems.

**Market Pegged Assets (MPA)** are stablecoins that follow the value of a specific asset and maintain price stability through a **collateralized structure**. UPCX’s MPA system uses a **hybrid collateral model** with two forms of backing:

- **Value Asset Collateral (50%)**:
  Stable and well-established assets such as gold, fiat currencies, Bitcoin (BTC), and Ethereum (ETH) are used to back the MPA, enhancing its price stability.
- **Algorithmic Collateral (50%)**:
  UPCX employs an **algorithmic collateral mechanism** to further ensure the price stability of MPAs. This mechanism dynamically adjusts the supply and demand of assets based on market conditions, reducing volatility. The algorithm adjusts the ratio of collateral assets and acquires additional backing if needed, maintaining the value of the stablecoin.

If the MPA price rises above the value of the linked asset, the **price stabilization mechanism** increases the supply to bring the price down. Conversely, if the price falls, the algorithm buys back MPAs to reduce circulation and stabilize the price. It also analyzes market data and adjusts the collateral ratio in real-time, minimizing risks from volatility.

In UPCX, users can use MPA assets to pay fees, unlike many other blockchains. For more detailed information, refer to the **fee model** section.
