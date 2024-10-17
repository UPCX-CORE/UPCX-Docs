---
sidebar_position: 2
---

# Blockchain Consensus Algorithm

## UPCX’s Consensus Algorithm

UPCX’s consensus algorithm is a hybrid model of Delegated Proof of Stake (DPoS) and Byzantine Fault Tolerance (BFT), which makes it more secure and reliable.

## What is Delegated Proof of Stake (DPoS)?

DPoS stands for "Delegated Proof of Stake," which is a consensus algorithm used in some blockchain networks. In DPoS, token holders vote for a limited number of "witnesses" or "delegates," who are responsible for verifying transactions and adding blocks to the blockchain. Unlike traditional Proof of Stake systems, where validators are selected randomly, in DPoS the selection of witnesses is based on the votes of token holders. This helps to increase the security and efficiency of the network while also giving token holders more control over the network's governance.

DPoS is also designed to be more scalable and energy efficient than traditional Proof of Work (PoW) and simple Proof of Stake (PoS) consensus algorithms.

## What is Byzantine Fault Tolerance (BFT)?

Byzantine Fault Tolerance (BFT) is a property of distributed systems that ensures their ability to continue operating correctly even when a certain proportion of nodes behave maliciously or fail. In the context of BFT, Byzantine refers to nodes that can display arbitrary, unpredictable, or malicious behavior.
The two-thirds rule is commonly used for achieving consensus in BFT systems. To tolerate f Byzantine nodes, a system typically requires 3f + 1 total nodes, which means that at least two-thirds of the nodes must be honest to ensure proper functioning. This rule ensures that there is always a majority of honest nodes in the system, making it difficult for malicious nodes to tamper with or disrupt the system's operation.

By requiring two-thirds of nodes to approve, BFT consensus algorithms can withstand failures and attacks, maintaining the integrity and reliability of the distributed system.

## Hybrid Consensus Algorithm of DPoS and BFT

BFT and DPoS are two different consensus algorithms used in blockchain technology, and a blockchain network can implement a combination of both.

In this hybrid consensus algorithm, a set of delegates or witnesses are selected through a DPoS process and are responsible for verifying transactions and adding blocks to the blockchain. Additionally, the network uses the BFT algorithm to ensure that the network can reach a consensus even in the presence of faulty or malicious delegates. This approach can help to ensure the reliability and robustness of the network while also providing the benefits of a more democratic and decentralized governance structure.

A hybrid consensus algorithm that combines BFT and DPoS can provide enhanced scalability, faster transaction finality, security, and energy efficiency.

Scalability:

DPoS offers a more scalable consensus mechanism compared to traditional Proof of Work (PoW) or simple Proof of Stake (PoS) systems by delegating the responsibility of validating transactions and creating new blocks to a limited number of elected witnesses. Combining this with the efficiency of BFT consensus algorithms can further enhance the scalability of the network.

Faster Settlement Finality:

BFT-based consensus algorithms usually offer faster transaction finality (Settlement Finality), as they require fewer communication rounds to reach consensus compared to other mechanisms like Nakamoto consensus used in Bitcoin. Combining this with DPoS can result in a blockchain network with faster transaction confirmations and higher throughput.

Enhanced Security:

BFT provides resilience against malicious or faulty nodes, ensuring the network can reach consensus even in the presence of a certain number of adversarial actors. Combining BFT with the witness selection process of DPoS can result in a more secure and reliable network.

Energy Efficiency:

DPoS is an environmentally friendly alternative to PoW, as it doesn't require massive computational power and energy consumption for mining. Incorporating BFT further improves efficiency by reducing the number of communication rounds required to reach a consensus.

The hybrid consensus algorithm of BFT and DPoS can significantly reduce the time required to verify a block (Block Confirmation Time). With other consensus algorithms, every node had to communicate with every other node at least twice to verify a block, which requires a total of O(N*logN) time, assuming N participants. However, with the hybrid consensus algorithm of BFT and DPoS, not all nodes need to communicate twice each. If only 1/3 of all nodes concatenate and agree with the other nodes, the Block Confirmation will be complete because 2/3 of the nodes will have successfully verified. This means that Block Confirmation Time is reduced by a factor of N*logN/N = logN over other consensus algorithms as O(logN/3) = O(logN).

UPCX achieves Block Confirmation Time (Settlement Finality) in 1 second by a hybrid consensus algorithm of BFT and DPoS.
