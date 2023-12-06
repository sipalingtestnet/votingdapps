import { connectWallet, truncate } from '@/services/blockchain'
import { RootState } from '@/utils/types'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { wallet } = useSelector((states: RootState) => states.globalStates)

  return (
    <nav className="h-[80px] flex justify-between items-center px-5"> <Link href="/" className="flex items-center"> <img src="https://i.imgur.com/FriYn5L.png" alt="Logo" className="w-16 h-16 " />  </Link> 
     <div className="flex justify-between">
    
    <Link href="https://faucet.dymension.sipalingtestnet.com/">
      <button className="h-[48px] w-[130px] sm:w-[144px] px-3 rounded-full text-sm font-bold transition-all duration-300 bg-transparent hover:text-white">
        Faucet
      </button>
    </Link>
    <Link href="/community">
      <button className="h-[48px] w-[130px] sm:w-[24px] px-3 rounded-full text-sm font-bold transition-all duration-300 bg-transparent hover:text-white">
        HubDymesion
      </button>
    </Link>
  </div>
     
      {wallet ? (
        
        <button
          className="h-[48px] w-[130px] 
          sm:w-[148px] px-3 rounded-full text-sm font-bold
          transition-all duration-300 bg-orange-500 hover:bg-orange-600"
        >
          
          {truncate({ text: wallet, startChars: 4, endChars: 4, maxLength: 11 })}
        </button>
        
        
      ) : (
        <button
          className="h-[48px] w-[130px] 
          sm:w-[148px] px-3 rounded-full text-sm font-bold
          transition-all duration-300 bg-orange-500 hover:bg-orange-600"
          onClick={connectWallet}
        >
          Connect wallet
        </button>
      )}
    </nav>
  )
}

export default Navbar