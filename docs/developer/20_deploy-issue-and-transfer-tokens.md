---
sidebar_position: 2
---

# Deploy, Issue and Transfer tokens

This tutorial introduces the concept of tokens, the `upcx.token` smart contract and then uses `clupcx` to call `upcx.token` actions.

## Step 1: Obtain Contract Source

Navigate to your contracts directory.

```shell
cd CONTRACTS_DIR
```

Pull the source

```shell
git clone https://github.com/UPCX/upcx.contracts --branch v1.7.0 --single-branch
```

This repository contains several contracts, but it's the `upcx.token` contract that is important for this section. Navigate to the `upcx.contracts/contracts/upcx.token` directory.

```shell
cd upcx.contracts/contracts/upcx.token
```

## Step 2: Create Account for Contract

Before we can deploy the token contract we must create an account to deploy it to, we'll use the **upcx development key** for this account.

[[info]]
| You need to unlock your wallet prior to the next step

```shell
clupcx create account upcx upcx.token UPCX6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV
```

## Step 3: Compile the Contract

```shell
upcx-cpp -I include -o upcx.token.wasm src/upcx.token.cpp --abigen
```

## Step 4: Deploy the Token Contract

```shell
clupcx set contract upcx.token CONTRACTS_DIR/upcx.contracts/contracts/upcx.token --abi upcx.token.abi -p upcx.token@active
```

```shell
Reading WASM from ...upcx.contracts/contracts/upcx.token/upcx.token.wasm...
Publishing contract...
executed transaction: a68299112725b9f2233d56e58b5392f3b37d2a4564bdf99172152c21c7dc323f  6984 bytes  6978 us
#         upcx <= upcx::setcode               {"account":"upcx.token","vmtype":0,"vmversion":0,"code":"0061736d0100000001a0011b60000060017e006002...
#         upcx <= upcx::setabi                {"account":"upcx.token","abi":"0e656f73696f3a3a6162692f312e310008076163636f756e7400010762616c616e63...
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

## Step 5: Create the Token

To create a new token, call the `create` action with the following parameters specified as a JSON array:

- An `issuer` that is an upcx account. In this case, it's `alice`. This issuer will be the one with the authority to call `issue` and/or perform other actions such as closing accounts or retiring tokens.

- An `asset` type composed of two pieces of data, a floating-point number sets the maximum supply and a `symbol` in capitalized alpha characters which represents the asset. For example, "1.0000 SYS".

Below is a concise way to call this method, using positional arguments:

```shell
clupcx push action upcx.token create '[ "alice", "1000000000.0000 SYS"]' -p upcx.token@active
```

The command above created a new token `SYS` with a precision of 4 decimals and a maximum supply of 1000000000.0000 SYS. It also designates `alice` as the issuer. To create this token, the contract requires the permission of the `upcx.token` account. For this reason, `-p upcx.token@active` was passed to authorize this action.

An alternate approach uses named arguments:

```shell
clupcx push action upcx.token create '{"issuer":"alice", "maximum_supply":"1000000000.0000 SYS"}' -p upcx.token@active
```

Execute the command above:

```shell
executed transaction: 10cfe1f7e522ed743dec39d83285963333f19d15c5d7f0c120b7db652689a997  120 bytes  1864 us
#   upcx.token <= upcx.token::create          {"issuer":"alice","maximum_supply":"1000000000.0000 SYS"}
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

## Step 6: Issue Tokens

The issuer `alice` can now issue new tokens. As mentioned earlier only the issuer can do so, therefore, `-p alice@active` must be provided to authorize the `issue` action.

```shell
clupcx push action upcx.token issue '[ "alice", "100.0000 SYS", "memo" ]' -p alice@active
```

```shell
executed transaction: d1466bb28eb63a9328d92ddddc660461a16c405dffc500ce4a75a10aa173347a  128 bytes  205 us
#   upcx.token <= upcx.token::issue           {"to":"alice","quantity":"100.0000 SYS","memo":"memo"}
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

To inspect the transaction, try using the `-d -j` options, which indicate "don't broadcast" and "return the transaction as json", which you may find useful during development.

```shell
clupcx push action upcx.token issue '["alice", "100.0000 SYS", "memo"]' -p alice@active -d -j
```

## Step 7: Transfer Tokens

Now that account `alice` has been issued tokens, transfer some of them to account `bob`.

```shell
clupcx push action upcx.token transfer '[ "alice", "bob", "25.0000 SYS", "m" ]' -p alice@active
```

```text
executed transaction: 800835f28659d405748f4ac0ec9e327335eae579a0d8e8ef6330e78c9ee1b67c  128 bytes  1073 us
#   upcx.token <= upcx.token::transfer        {"from":"alice","to":"bob","quantity":"25.0000 SYS","memo":"m"}
#         alice <= upcx.token::transfer        {"from":"alice","to":"bob","quantity":"25.0000 SYS","memo":"m"}
#           bob <= upcx.token::transfer        {"from":"alice","to":"bob","quantity":"25.0000 SYS","memo":"m"}
warning: transaction executed locally, but may not be confirmed by the network yet         ]
```

This time the output contains three `transfer` actions. The output indicates all the action handlers that were called, the order they were called in, and whether any output was generated by the action.

Now check if `bob` received the tokens using [clupcx get currency balance](https://developers.upcx.io/manuals/upcx/latest/clupcx/command-reference/get/currency-balance)

```shell
clupcx get currency balance upcx.token bob SYS
```

```text
25.0000 SYS
```

Check `alice`'s balance. Notice that tokens were deducted from the account.

```shell
clupcx get currency balance upcx.token alice SYS
```

```text
75.0000 SYS
```

Excellent! Everything adds up.

## What's Next

- [Understanding ABI Files](./30_understanding-ABI-files.md): Introduction to Application Binary Files (ABI) and how the ABI file correlates to the `upcx.token` contract.
