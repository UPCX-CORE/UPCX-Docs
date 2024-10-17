---
sidebar_position: 1
---

# Graphene: The core technology behind UPCX

## What is Graphene?

UPCX's high processing power and various useful features, such as Financial Smart Contract, are supported by Graphene, the core technology of UPCX Blockchain.

Graphene is a real-time scalable sharding blockchain architecture capable of handling complex decentralized applications (dApps), high-level business transactions, financial smart contracts, and the development of sophisticated shards for a variety of uses.

Graphene offers several key benefits over traditional blockchain.

Graphene has a much faster block time, meaning that transactions are processed and confirmed much faster than on other blockchain.

Graphene offers a high level of scalability, allowing it to process more than 100,000 transactions per second without slowing down. This makes it an ideal for decentralized exchanges, marketplaces, and other high-volume applications.

Graphene significantly reduces transaction costs and settlement processing times, giving users access to real-time confirmation of all transactions globally.

In addition to scalability on a global level, Graphene's unique features include multiple signature transactions, diverse permissions, multiple staking sources, and flexible, customizable fees per transaction.

Graphene is also designed with security in mind, offering robust security features to protect against hacking and other security threats.

## Features of Graphene

## How Graphene Works

Graphene aims to reduce the amount of data that needs to be transmitted across the network when propagating new blocks. This is achieved through the use of advanced set reconciliation techniques, Bloom filter and Invertible Bloom Lookup Table (IBLT), which help minimize redundant data transmission.

Invertible Bloom Lookup Tables (IBLT):

IBLTs are a probabilistic data structure that enables efficient set reconciliation between two parties. In the context of blockchain, IBLTs are used to communicate the differences between two sets of transaction data with minimal overhead. This allows for much more efficient block propagation, as only the differences between the sets need to be communicated.

Bloom Filters:

Bloom Filters are another probabilistic data structure used to test whether an element is a member of a set. In Graphene, Bloom Filters are employed to further reduce the amount of data that needs to be transmitted. They enable nodes to quickly determine which transactions are already known, so only unknown transactions need to be transmitted.

By utilizing these techniques, Graphene can significantly reduce bandwidth requirements, leading to faster block propagation, reduced block times, higher transaction throughput, and improved network performance. This helps to address scalability issues often faced by blockchain networks, making them more suitable for widespread adoption and use.

## Components of Graphene

Graphene components include a Beacon Chain, Validator Modules, Shard Modules, Relayer Modules, and Cross-Links. These make up the Graphene Engine.

Beacon Chain:

Beacon Chain is a key component of Graphene, and acts as the conductor of it.

The main role of Beacon Chain is to manage the Delegated Proof-of-Stake (DPoS) consensus algorithm. Beacon Chain is also responsible for managing and regulating the activity of all the Shard Chains.

Beacon Chain controls the witnesses and their stakes, selects block parameters for each shard, forms validation committees to vote on proposed blocks, and serves as the anchor point for cross-shard transactions. Beacon Chain also applies consensus rules, rewarding and punishing validators, and plays the role of a connector and a broadcaster.

Validator Modules:

Validator Modules are responsible for verifying the accuracy of data sent to the Graphene Beacon Chain and confirming that all transactions are valid. The Validator Modules are a key component of the Graphene and play an essential role in securing the integrity and stability of the Blockchain.

When a user initiates a transaction on the blockchain, the transaction is queued on the network until it is validated. Validator Modules collect and batch individual transactions in a temporary block to verify them. Once the relevant transactions have been verified, the Validator Modules add them to the blockchain as a permanently stored record.

In the Graphene Delegated Proof of Stake (DPoS) consensus algorithm, validators are selected randomly.

Validator Reward System is an essential part of the Blockchain network to improve its security. The blocks are examined and verified by the validators with regulations established by the blockchain. For each verified transaction, validators are rewarded with transaction fees.

Shard Modules:
Shard Modules are designed to improve the network's scalability. In a traditional blockchain network, every node on the network must process every transaction, which can lead to network congestion and slow transaction times. Shard Modules break the network into smaller sub-networks, or shards, each of which is responsible for processing a subset of transactions. This allows the network to handle a larger volume of transactions more efficiently. Graphene's Shard Modules also include features such as cross-shard communication and dynamic shard allocation, which further improve the network's performance and scalability.

Relayer Modules:

Relayer Modules are responsible for broadcasting transactions to the network and processing the verification response from the Validator Modules. Relayer Modules also act as a bridge between users and validators, allowing them to interact with each other.

The main role of Relayer Modules is to broadcast transactions on the network, ensuring they reach all validators and not just a single node. The modules also relay any responses received from the validators, providing feedback on whether a transaction was accepted or rejected by the network. This feedback helps users identify potential issues with their transactions before submitting them for validation.

In addition, Relayer Modules send confirmation messages when a block is successfully added to the blockchain. This enables users to stay informed about their transaction status without having to constantly check up on it manually.

Relayer Modules serve as an important communication layer between users and validators, providing secure and efficient transmission of transactions across the blockchain.

Cross-Links:

Cross-Links are mechanisms in the Graphene that allow different shards in the network to communicate and share data with each other.

Cross-Links are established by the Beacon Chain to connect different shards in the Graphene. The cross-Links mechanism enables shards to share data and transactions with each other, allowing for a more efficient and scalable blockchain.

By enabling cross-shard communication, Cross-Links facilitate the creation of decentralized applications that require high throughput and low latency.
