---
id: blockchain-overview
title: Overview
prev: drf-instructions
next: blockchain-instructions
---

### Objectives

In **Part 1**, you created a simple DRF API with a single endpoint to persist wallet data and started to work with the blockchain. In **Part 2**, you'll extend the API to do some more complex work: capturing the Columbus token to a wallet. To do this, you'll need to implement the following steps:

1. Connect to the Ethereum mainnet using Web3.py
2. Access a pre-deployed smart contract
3. Build a transaction using the contract to capture a Columbus token to a wallet
4. Sign the transaction using the wallet's private key
5. Execute the signed transaction

As you have been given a live wallet and have access to its private key, it would be fairly straightforward to implement these steps in a single python script. However, it doesn't make sense to do this in the context of an API built to process an arbitrary number of wallets, because that would require not just the wallet's public address but also its private key to be posted to the API. Even assuming you built the transport security and authentication features necessary to support secure handling of this kind of sensitive information, it's unlikely many users would be willing to share their private key in this way, as they'd be giving you access to their wallet.

Instead, you'll need to implement the steps above in a way that avoids the API relying on access to the wallet's private key -- in other words, everything that _doesn't_ require the private key will be implemented on the _server_ side. Then, you'll create a separate _client_ script that interacts with the API and executes in isolation any logic that requires the private key (the signing of the transaction).

For simplicity, we'll use the same Python stack and libraries for both client and server, executing both within the Vagrant VM. But the logic will be orchestrated between the two:

- The API registers the wallet by persisting its public address (you did this in Part 1)
- The API connects to the Ethereum mainnet to access the smart contract and build a raw, unsigned transaction for the wallet
- The client script gets the raw transaction from the API and signs it using the private key
- The client script executes the signed transaction
