# Core Engine

The **Core Engine** is the fundamental component of the UPCX blockchain node, designed to maximize network performance and scalability. Given that UPCX is a blockchain based on a **consensus algorithm**, efficient transaction verification is essential, necessitating innovative technical solutions.

Traditional blockchain systems face significant issues when it comes to processing transactions:

1. **Limitations in Transaction Verification Speed**:

   Blockchain transaction verification requires repeated calculations involving large, 32-byte numbers. Even with modern computational power, performing these large calculations tens of thousands of times per second is inefficient. Traditional blockchains rely on sequential processing, which cannot meet the high-speed demands of real financial systems.

2. **Excessive Communication Overhead**:

   If all nodes share transaction data to verify transactions, this results in enormous communication overhead. In cases where tens or hundreds of megabytes of data are shared per second, the network can become overloaded, reducing the overall efficiency of the blockchain network.

The following sections introduce the technologies UPCX has implemented to overcome these performance limitations and solve scalability issues.

## GrapheneX

Blockchain nodes utilize a special storage area called a **Mempool**, which temporarily stores unconfirmed transactions before they are recorded on the blockchain. When a node receives a new transaction, it stores it in the Mempool, verifies it, and then includes it in a block. However, for consensus to be reached, all nodes must synchronize their Mempool, leading to repeated transmission of unnecessary transaction data.

For example, if Node A wants to share its transactions with Node B, it cannot determine if Node B already has these transactions in its Mempool. As a result, Node A shares all of its transactions, and this operation is repeated across all nodes, potentially overwhelming the network.

To address this problem, **Graphene Technology** was developed.

- **First Generation Graphene**
  The first generation of Graphene technology uses a **Bloom Filter** to determine the likelihood that a transaction already exists in the Mempool. It only transmits transactions when they are unlikely to exist in the recipient’s Mempool, reducing redundant data transfers by over 50%. However, Bloom Filters rely on probabilistic methods and cannot guarantee 100% accuracy.
- **Second Generation Graphene**
  The second generation of Graphene employs **IBLT (Invertible Bloom Lookup Table)** technology. IBLT functions similarly to a Bloom Filter but uses two filters to create an **asymmetric bit array**, allowing nodes to accurately identify missing transactions. While this reduces errors and improves reliability, the data table used in IBLT is roughly twice as large as that of a Bloom Filter.
- **GrapheneX**
  UPCX adopts **GrapheneX**, which enhances both efficiency and accuracy. GrapheneX allows nodes to share transaction data with **100% accuracy**, identifying transactions missing from other nodes. In GrapheneX, IBLT is used to serialize data into a bit array, which is then passed to a **shared memory node**. This node uses an **extended IBLT (e-IBLT)** to determine the missing transactions and only shares those.

A key feature of GrapheneX is that the **total amount of data transmitted over the network remains the same**, but the majority of data processing is handled by the shared memory node, reducing network load. The shared memory node is equipped with high-performance bandwidth and only handles data sharing, without affecting block creation or the decentralized structure of the blockchain.

GrapheneX helps solve scalability issues and significantly enhances the performance of the UPCX blockchain network.

## Multi-Threading

UPCX's **Multi-Threading Engine** adopts parallel processing techniques to maximize network performance. In traditional blockchain systems, when transactions enter the Mempool, they are typically prioritized based on transaction fees and then executed **sequentially**. This sequential processing approach significantly reduces network efficiency, especially during high transaction volumes, leading to bottlenecks.

To address this issue, UPCX implements a parallel processing method using a **Dependency Tree** instead of sequentially processing transactions. This method analyzes dependencies between transactions and is designed to allow independent transactions to be executed simultaneously.

- **Dependency Tree Structure**
  The UPCX engine analyzes transactions in the Mempool and builds a **Dependency Tree** based on their relationships. Transactions with dependencies must be executed after their prerequisites, but independent transactions can be processed in parallel.
- **Thread Creation and Parallel Processing**
  For each branch of the Dependency Tree, an **independent thread** is created. Each thread processes all the transactions in its branch concurrently. This simultaneous execution of transaction validation and block creation significantly improves network throughput. Once a branch is processed, the corresponding thread automatically terminates.
- **Limiting the Number of Threads**
  To prevent excessive system load from thread creation, the UPCX engine limits the number of threads that can run concurrently. Typically, several dozen threads are designed to run simultaneously, ensuring efficient use of CPU and memory resources while maintaining high performance.

Through this **parallel processing approach**, UPCX achieves significantly higher transaction speeds compared to traditional sequential blockchain systems. It reduces bottlenecks within the network and maintains stable performance even during high user traffic. This method is particularly well-suited for real-time payments and large-scale financial applications that require high performance and scalability.

In conclusion, the UPCX Multi-Threading Engine fundamentally improves blockchain processing by enabling a high-performance network environment through parallel execution, making it ideal for handling large-scale transaction loads.
