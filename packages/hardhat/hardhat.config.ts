import * as dotenv from "dotenv";
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";
import "@matterlabs/hardhat-zksync-deploy";

// If not set, it uses ours Alchemy's default API key.
// You can get your own at https://dashboard.alchemyapi.io
const providerApiKey = process.env.ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF";
// If not set, it uses the hardhat account 0 private key.
const deployerPrivateKey =
  process.env.DEPLOYER_PRIVATE_KEY ?? "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
// If not set, it uses ours Etherscan default API key.
const etherscanApiKey = process.env.ETHERSCAN_API_KEY || "DNXJA8RX2Q3VZ4URQIWP7Z68CJXQZSC6AW";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        // https://docs.soliditylang.org/en/latest/using-the-compiler.html#optimizer-options
        runs: 200,
      },
    },
  },
  zksolc: {
    version: "1.3.13",
    settings: {
      optimizer: {
        enabled: true,
        // https://docs.soliditylang.org/en/latest/using-the-compiler.html#optimizer-options
        runs: 200,
      },
    },
  },
  defaultNetwork: "localhost",
  namedAccounts: {
    deployer: {
      // By default, it will take the first Hardhat account as the deployer
      default: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      goerli: "0xc4f6578c24c599F195c0758aD3D4861758d703A3",
      zkSyncTestnet: "0xc4f6578c24c599F195c0758aD3D4861758d703A3",
      zkSync: "0xc4f6578c24c599F195c0758aD3D4861758d703A3",
    },
    owner: {
      default: 0,
      zkSyncTestnet: "0xc4f6578c24c599F195c0758aD3D4861758d703A3",
    },
    troll: {
      default: 1,
    },
  },
  networks: {
    // View the networks that are pre-configured.
    // If the network you are looking for is not here you can add new network settings
    hardhat: {
      zksync: false,
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${providerApiKey}`,
        enabled: process.env.MAINNET_FORKING_ENABLED === "true",
      },
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    arbitrum: {
      url: `https://arb-mainnet.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    arbitrumGoerli: {
      url: `https://arb-goerli.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    optimism: {
      url: `https://opt-mainnet.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    optimismGoerli: {
      url: `https://opt-goerli.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    polygonMumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${providerApiKey}`,
      accounts: [deployerPrivateKey],
    },
    zkSyncTestnet: {
      url: "https://testnet.era.zksync.dev",
      zksync: true,
      accounts: [deployerPrivateKey],
      verifyURL: "https://zksync2-testnet-explorer.zksync.dev/contract_verification",
      ethNetwork: "goerli",
    },
    zkSync: {
      url: "https://mainnet.era.zksync.io",
      zksync: true,
      accounts: [deployerPrivateKey],
      verifyURL: "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
      ethNetwork: "ethereum",
    },
    gnosis: {
      url: "https://rpc.gnosischain.com",
      accounts: [deployerPrivateKey],
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      accounts: [deployerPrivateKey],
    },
    base: {
      url: "https://mainnet.base.org",
      accounts: [deployerPrivateKey],
    },
    baseGoerli: {
      url: "https://goerli.base.org",
      accounts: [deployerPrivateKey],
    },
  },
  verify: {
    etherscan: {
      apiKey: `${etherscanApiKey}`,
    },
  },
};

export default config;
