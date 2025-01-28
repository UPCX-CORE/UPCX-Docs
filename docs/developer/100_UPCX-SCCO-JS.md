---
sidebar_position: 10
---

# SSCO JS Library

To compile upcx smart contract, we provide js libary named scco`(Smart Contract Compile)`.

`upcx-scco-js` is a library for managing UPCX blockchain smart contracts. It provides a CLI tool, `scco`, for initializing, compiling, and deploying smart contracts.

## Installation

To use the library, install it globally or as a development dependency:

```bash
npm install -g upcx-scco-js
```

or

```bash
npm install --save-dev upcx-scco-js
```

## Commands

The `scco` CLI provides the following commands:

### 1. `init`

Initializes a new UPCX smart contract project.

#### Usage:

```bash
npx scco init
```

#### Steps:

1. Prompts the user for the contract name.
2. Creates a directory structure under `contracts/<contractName>`:
   - `src/` - Contains the main `.cpp` file.
   - `include/` - Contains the `.hpp` header file.
   - `ricardian/` - Contains the `.contracts.md.in` file for Ricardian contracts.
   - `CMakeLists.txt` - The CMake configuration file.
3. Generates starter files based on the contract name.

### 2. `compile`

Compiles the smart contract and saves the result to `build/<contractName>`.

#### Usage:

```bash
npx scco compile
```

#### Steps:

1. Prompts the user for the contract name.
2. Compiles the source files from `contracts/<contractName>`.
3. Saves the compiled `.wasm` and `.abi` files to `build/<contractName>`.

### 3. `deploy`

Deploys the compiled smart contract to the UPCX blockchain.

#### Usage:

```bash
npx scco deploy
```

#### Steps:

1. Prompts the user for the contract name.
2. Reads the compiled `.wasm` and `.abi` files from `build/<contractName>`.
3. Uses RPC and user credentials from the `.env` file to deploy the contract.

### 4. Environment Variables

The `deploy` command requires the following variables to be set in a `.env` file:

```env
UPCX_PRIVATE_KEY=<your_private_key>
UPCX_RPC_URL=http://node1-devnet.upcx.org:8888
UPCX_ACCOUNT_ID=<your_account_id>
```

## Directory Structure

After running `init`, the directory structure will look like this:

```
contracts/
  <contractName>/
    src/
      <contractName>.cpp
    include/
      <contractName>.hpp
    ricardian/
      <contractName>.contracts.md.in
    CMakeLists.txt
build/
  <contractName>/
    <contractName>.wasm
    <contractName>.abi
```

## Notes

- The library uses `upcx-js` under the hood to interact with the blockchain.
- Ensure that the RPC server is reachable and the private key is valid for transactions.

For more information, visit the [upcx-scco-js documentation](#).
