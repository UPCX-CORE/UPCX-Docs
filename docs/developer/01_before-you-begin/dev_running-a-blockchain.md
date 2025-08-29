---
---

# Running a blockchain

Smart contracts are [deployed](https://developers.upcx.io/manuals/upcx/latest/clupcx/how-to-guides/how-to-deploy-a-smart-contract) to a blockchain and smart contract transactions are executed on a blockchain. Testing a smart contract requires a blockchain. You can run a local blockchain for testing smart contracts or use the [official Block.one testnet](https://testnet.upcx.io/). See the [testnet quick start guide](#) for more information on how to use the official Block.one testnet. This tutorial shows how to run a blockchain on your local machine. This is commonly known as a `local single node testnet`.

This tutorial introduces the [UPCX Blockchain](#), the core components used in this tutorial are:

- [Nodupcx](#): The core daemon which runs in a network of daemons to create a blockchain
- [Clupcx](#): The command line tool to send commands and requests to nodupcx
- [Kupcxd](#): A local secure store for private keys

This tutorial shows how to:

- Create a single node blockchain running on your local machine
- Import the private key to the default _upcx_ system account

Once the tutorial is completed you should be able to run a local single node testnet.

## Run a Local Single-Node Blockchain

Run a local nodupcx instance which produces blocks, creating a local single-node testnet, using these [instructions](https://developers.upcx.io/manuals/upcx/latest/nodupcx/usage/development-environment/local-single-node-testnet).

You can use this local single-node testnet to follow the smart contract guides and for testing your own smart contracts. You can create more advanced local single node testnet with consensus protocols and multi node blockchain configurations [here](https://developers.upcx.io/manuals/upcx/latest/nodupcx/usage/development-environment/index) and then look at the [Bios Boot Sequence Tutorial](#) to see how real blockchains are bootstrapped.

### The _upcx_ default system account

To use a blockchain requires blockchain accounts, when you launch a new UPCX blockchain it creates a default system account called _upcx_. The _upcx_ account is a special account that is used to bootstrap a blockchain. To use the _upcx_ account on a local single node blockchain you must add the private key of the _upcx_ account to a [wallet.](#) You can then authorize transactions for the _upcx_ account. Here we use [kupcxd](#). If you have not already created a wallet then follow this guide to [create a development wallet](#).

[[warning]]
| The private key is widely known and so any blockchain where the _upcx_ account has not been [resigned](#) is not secure.

[[info]]
| The _upcx_ private key is **5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3**

#### Add the _upcx_ account private key to a local wallet

Use [Clupcx](#) to import the default _upcx_ account private keys into a local wallet.

```shell
clupcx wallet import --name local 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3
```

## What's next?

- Create Accounts: [Learn about creating accounts and how accounts are used with smart contracts](20_accounts-and-permissions.md)
