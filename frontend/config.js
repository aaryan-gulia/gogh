import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

const stylusTestnet = {
  id: 23011913,
  name: "Stylus testnet",
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://stylus-testnet.arbitrum.io/rpc'] },
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: 'https://stylus-testnet-explorer.arbitrum.io/' },
  },
}

const chains = [stylusTestnet]

export const config = createConfig({
  chains: chains,
  transports: {
    [stylusTestnet.id]: http(),
  },
})