import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal()
  const { address, isConnecting, isDisconnected } = useAccount()

  let btnText = "";

  if (isConnecting) btnText = "Connecting...";
  else if (isDisconnected) btnText = "Connect Wallet";
  else btnText = address.substring(0, 8) + '...' + address.substring(address.length - 3);


  return (
    <>
      <button className='bg-gradient-to-tr from-sky-300 to-blue-500 hover:from-sky-400 hover:to-blue-600 rounded-full text-white px-5 h-12 ' 
      onClick={() => open()}>
        {btnText}
      </button>
    </>
  )
}

//<button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button>
