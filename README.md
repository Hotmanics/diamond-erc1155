# Jacob Homanics

# Smart Contract Development Test using ZkSync L2
To satisfy the demands of the Smart Contract Development Test using ZkSync L2 document, please refer to this section. Everything else is an added bonus :)

## Commands

```
yarn install
```

```
yarn hardhat:test
```

## ZKSync Deployments:

Diamond: [0x3804798C2e9Cfaf7d0591955B042aDB316D2E764](https://goerli.explorer.zksync.io/address/0x3804798C2e9Cfaf7d0591955B042aDB316D2E764)

DiamondCutFacet: [0xc6514Db2418dff785130731eA46993c971f96B54](https://goerli.explorer.zksync.io/address/0xc6514Db2418dff785130731eA46993c971f96B54)

DiamondInit: [0xDEAe470139f359F569Bad53407238e61113DbfE5](https://goerli.explorer.zksync.io/address/0xDEAe470139f359F569Bad53407238e61113DbfE5)

DiamondLoupeFacet: [0x9A62534456456cFCEC8dDdb5347cF8ffe11EC172](https://goerli.explorer.zksync.io/address/0x9A62534456456cFCEC8dDdb5347cF8ffe11EC172)

CustomERC1155: [0x752BAc499975842BdF376E5588c059fe9f4F08FB](https://goerli.explorer.zksync.io/address/0x752BAc499975842BdF376E5588c059fe9f4F08FB)

# Scaffold Eth 2

DISCLAIMER: Using the webapp portion of this repository to interact with the ZkSync smart contracts can be buggy. I am glad to try and run you through the processes, otherwise you can use other means to interact with the smart contracts. The hardhat portion of this repository confidently can build and deploy to ZKSync Testnet.

This project forks scaffold-eth-2 to implement a working hardhat-deploy environment and accompanying webapp where developers can build, deploy, and test Diamond smart contracts and view/interact with them on a webapp. This specific repository has an additional focus of building
on ZkSync.

The core smart contracts can be found within `packages/hardhat/contracts`. They work to create a Custom ERC1155 Collection following
the ERC 2535 (Diamonds, Multi-Facet Proxy) standard and Diamond Storage pattern. The `packages/hardhat` package is a complete suite of tools to make building, deploying, and testing diamond smart contracts easy and clean.

The webapp (`packages/nextjs`) is a handy tool to interact with deployed versions of these smart contracts within a clean UI and a simple UX experience.
(@note: When dealing with ZkSync smart contracts, Some errors popup through the UI when making transactions, but these appear to be strictly visual. ERROR on createTokenType and mint functions: Cannot mix BigInt and other types, use explicit conversions).

TODO:// Talk about how CustomERC1155 works and how it manages to meet the expectations of Game7 DAO's challenge

## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart
NOTE: All commands can be done from the repository's root directory.

### 1. Clone this repo & install dependencies

```
yarn install
```

### 2. Run smart contract tests on local hardhat node:

```
yarn hardhat:test
```

### 3. Envrionment specific paths
 There are two paths to take in this README: `3.1` and `3.2`. `3.1` follows development with your local hardhat node and most EVM compatible chains. `3.2` follows development with ZkSync and ZkSync Testnet. There are key differences in their development processes, therefore you need to interact with the project differently based on your needs.

#### 3.1. Hardhat & Most EVM Compatible Chains Development

##### 3.1.1. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

#### 3.1.2. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script. 

#### 3.1.3. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

`Diamond - With CustomERC1155` is the diamond which has the CustomERC1155 Facet. Thus, you should interact with that smart contract for the expected behaviour.

Some commands for the smart contract require you to be connected to a certain account. In a local hardhat environment, this is simply account 0: `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`.

Interact with the local simnet by importing the following private key into MetaMask. _Do not use this private key anywhere else_

```
Private Key:
0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

Then add an RPC provider to MetaMask to point to your local simnet.

1.  Navigate to settings
2.  Select `Networks`
3.  Click `Add Network`
4.  Enter the following:

         Network Name: Hardhat
         New RPC URL: http://localhost:8545
         Chain ID: 31337

Select the network and connect to your local webapp to interact with simnet

### 3.2 ZkSync & Testnet Development

Change the network to `targetNetwork: chains.zkSyncTestnet` in `scaffold.config.ts`.
This lets you view the deployed Zksync smart contracts on the webapp.

#### 3.2.1 In your terimnal, compile using ZkSolc

```
yarn compile --network zkSyncTestnet
```

This comands compiles your smart contracts for ZkSync and creates artifacts and caches of the smart contracts found in `packages/hardhat/artifacts-zk` and `packages/hardhat/caches-zk`

#### 3.2.2 Configure .env

run this command in your terminal
```
cp packages/hardhat/.env.example packages/hardhat/.env
```

Fill it out accordingly:
```
ALCHEMY_API_KEY=
DEPLOYER_PRIVATE_KEY=
ETHERSCAN_API_KEY=
```

#### 3.2.3 Deploy to Zksync testnet:
First move `packages/hardhat/deploy-zk/00_deployDiamondWithCustomERC1155_zkSync.ts` to the `deploy` folder. 

Next, run this command in your terminal:
 
```
yarn deployZkSync --network zkSyncTestnet
```

This command deploys your smart contracts to Zk Testnet. Traditionally, hardhat-deploy saves your deployment information in a `deployments` folder. However this is not the case when developing for ZkSync. It is a more manual process. 

#### 3.2.4 Connect ZkSync deployments to webapp
Grab the addresses present in your console displayed from running the deploy command and (re)place them into
`~/packages/nextjs/generated/zkDeployedContracts.ts` accordingly.

The deployment addresses do not automatically get updated in the eth-scaffold-2 project when dealing with ZkSync.

Next, comment out this line of code in the file `~/packages/nextjs/utils/scaffold-eth/contract.ts` like so:
```
// import contractsData from "~~/generated/deployedContracts";
```

Finally, uncomment this line of code in the same file like so:
```
import contractsData from "~~/generated/zkDeployedContracts";
```

#### 3.2.4. Start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`.

_You may see visual errors when doing transactions but these appear to be purely visible._

# Considerations
Currently this repository is deploying new instances of every Facet everytime we deploy scripts. Maybe we can build a system to see if we want to re-use existing instances since we can attach the same one to new Diamond instances since the storage exists on the Diamond.