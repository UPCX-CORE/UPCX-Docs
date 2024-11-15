# Sharding

Sharding is a technology developed to address the scalability issue of blockchains by dividing the network into multiple **shards**, each of which can process transactions independently. This approach allows the blockchain to maintain a high **TPS (Transactions Per Second)** even when a large number of users access the network. However, existing sharding technologies have certain limitations that UPCX aims to overcome with its **innovative sharding solution**.

## Limitations of Traditional Sharding Technologies

Most traditional blockchain sharding systems rely heavily on a **Beacon Chain** to synchronize data between shards and handle cross-shard transactions. The Beacon Chain acts like a central management system, requiring all shards to exchange data through it. This reliance often leads to synchronization issues. For instance, when a transaction is executed on one shard, it is often unclear which shard the destination lies in. As a result, the shard must synchronize its transaction data with the Beacon Chain, creating potential network overload.

This dependency on the Beacon Chain might not be a significant problem for low TPS blockchains but becomes a severe issue for high-performance blockchains like UPCX. No matter how optimized the hardware and algorithms are, there is a limit to the processing capacity of a single Beacon Chain. As the network scales, performance degradation is inevitable.

## UPCX Sharding

UPCX introduces a new **sharding solution** to resolve these issues, offering superior performance and scalability compared to traditional systems.

UPCX significantly reduces reliance on the **Beacon Chain**. Each shard in UPCX handles transactions independently, with the Beacon Chain only performing minimal data synchronization tasks. This design alleviates the burden on the Beacon Chain, helping maintain high network performance. Additionally, since each shard can independently validate and generate blocks, the overall level of decentralization in the network is enhanced.

In the UPCX sharding system, users specify a particular shard when creating a wallet. This ensures that each wallet only exists within its designated shard, reducing unnecessary synchronization tasks. Wallet data is not synchronized across other shards or the Beacon Chain, preventing resource wastage and improving network performance.

Given that the source and destination of transactions are clearly defined, there is no need for all shards to synchronize transaction data through the Beacon Chain. Only the **source shard** and the **destination shard** perform synchronization, leading to significantly improved transaction processing speeds. This approach reduces bandwidth usage and allows for stable transaction handling even in high-performance environments.

This innovative method plays a crucial role in making UPCX a next-generation blockchain platform capable of supporting global financial applications and large-scale payment systems with superior scalability solutions.
