---
sidebar_position: 2
---

# Fee Model

UPCX adopts a **low-fee structure** designed to enhance user experience and network efficiency. Traditional blockchain networks often face skyrocketing fees when network traffic increases. However, UPCX mitigates this issue through its high **TPS (Transactions Per Second)** capability and sharding architecture.

## **Static Fee Model**

UPCX implements a **static fee model**, meaning the network does not adjust fees dynamically based on congestion or network status. This is made possible by the high transaction throughput of UPCX, eliminating the need to prioritize transactions based on fees. Instead, transaction fees are determined based on the **size** and **execution load** of the transaction:

**Transaction Fee = Execution Load × Fee per Byte**

Currently, the fee per byte is set at **0.00001 UPC**, but this value can be adjusted through consensus among the network’s **Witnesses**. Witnesses and other key stakeholders such as **Workers** can modify this value based on the network conditions within their shard.

## **Fee Storage (Fee Pool)**

All transaction fees in UPCX are initially collected in a specific wallet called the **Fee Pool**. The Fee Pool manages the collected fees and distributes them according to predefined rules. It is a crucial mechanism for maintaining transparency and fairness across the network.

## **Fee Distribution**

The collected transaction fees are distributed among the **Witnesses**, **Workers**, and **MPA (Market Pegged Asset) Issuers**. This fee distribution provides economic incentives to network validators and service providers, supporting the maintenance and security of the network.

- **Witnesses**: Receive a portion of the fees for their role in block creation and transaction validation.
- **Workers**: Are compensated based on their contributions to network maintenance and development.
- **MPA Issuers**: Manage and issue stablecoins and other assets, receiving part of the fees from transactions involving their issued assets.

In the UPCX blockchain, transaction fees can be paid not only in the native UPC coin but also in verified assets like **MPA (Market Pegged Assets)**. When an MPA is used to pay the fee, an equivalent value in UPC is transferred from the **Fee Pool** to the **Reservation Pool** and then burned. This mechanism helps maintain the stability of MPA values while reducing overall inflation in the network.

Additionally, when an MPA is used for fee payment, a portion of the fee is directed to the **MPA Issuer**, providing them with incentives for asset issuance and management, and ensuring they are economically rewarded for their role.

This fee model enhances network stability, encourages responsible asset issuance, and provides a fair reward system for participants in the UPCX ecosystem.
