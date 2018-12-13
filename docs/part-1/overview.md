---
id: drf-overview
title: Overview
prev: prerequisites
next: drf-instructions
---

### Objectives

In **Part 1**, you'll:

- Provision and setup a new project using Django Rest Framework (DRF)
- Create a new endpoint to persist wallet data by adding a DRF Model, Serializer, and ViewSet, then run the server and test the endpoint
- Use DRF and Web3 to ensure the wallet is both unique and valid
- Create a sub-endpoint to check the wallet's balance via Web3 using the blockchain

For this workshop, you'll be using Vagrant and VirtualBox to create a VM-based development environment. By developing within a VM, we can not only spin up a self-contained environment with all the required middleware, but we can also ensure more consistent, platform-agnostic results.

The combination of these two tools is powerful: DRF allows rapid development of a persistence-enabled, model-backed API with minimal boilerplate code, and Vagrant automates many tedious tasks related to provisioning.
