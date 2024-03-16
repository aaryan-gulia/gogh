import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { arbitrum } from 'wagmi/chains'

import { Header } from './components/Header'
import { SetParameters } from './components/SetParameters'
import { GenerateButton } from './components/GenerateButton'
import { GeneratedImage } from './components/GeneratedImage'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '2dbdb884015cafa2f7b869462e5462a6'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [arbitrum]
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <main className='h-screen pb-36'>
          <Header />
          <div className='flex flex-row gap-20 pt-32 h-full mx-auto max-w-[1000px]'>
            <div className='h-full grow flex flex-col gap-8'>
              <SetParameters />
              <GenerateButton />
            </div>
            <GeneratedImage />
          </div>
        </main>
      </QueryClientProvider> 
    </WagmiProvider>
  );
}

export default App;