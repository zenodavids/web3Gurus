// Importing the necessary modules from React and Next.js libraries
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Defining the LandingPage component
const LandingPage = () => {
  // Initializing a state variable 'MetamaskWalletIsConnected' using useState hook
  const [MetamaskWalletIsConnected, setMetamaskWalletIsConnected] =
    useState(false)

  // Defining a side-effect using useEffect hook to update the state variable
  useEffect(() => {
    if (MetamaskWalletIsConnected) {
      setMetamaskWalletIsConnected(true)
    }
  }, [MetamaskWalletIsConnected])

  // Initializing a variable 'redirectToHome' using useRouter hook
  const redirectToHome = useRouter()

  // Defining an asynchronous function 'connectWallet' to connect to MetaMask wallet
  const connectWallet = async () => {
    try {
      // Accessing the 'ethereum' object from the window object
      const { ethereum } = window

      // Displaying an alert message if MetaMask wallet is not installed
      if (!ethereum) {
        window.alert('Please install MetaMask Wallet from the chrome Extension')
        return
      }

      // Requesting access to the user's accounts from the MetaMask wallet
      const allUserAccounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })

      // Storing the user's wallet address in the localStorage
      localStorage.setItem('walletAddress', allUserAccounts[0])

      // Updating the state variable 'MetamaskWalletIsConnected' to true
      setMetamaskWalletIsConnected(true)

      // Redirecting the user to the home page using the 'push' method of the 'redirectToHome' object
      redirectToHome.push('/homePage')
    } catch (error) {
      console.log(error)
    }
  }

  // Rendering the LandingPage component
  return (
    <>
      <section className='flex justify-start items-center flex-col h-screen  '>
        <div className='relative w-full h-full bg-black/95 opacity-95 '>
          <img
            className='w-full h-full object-cover brightness-100'
            src='https://source.unsplash.com/1600x900/?office-meetings'
            alt=''
          />
          <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 '>
            <div className='text-center py-12 px-12 md:pb-16 bg-black/95 opacity-95  rounded-tr-full rounded-bl-full shadow-2xl shadow-purple-700/100 border-4 border-indigo-500/100'>
              <h1
                className='text-5xl  bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:text-6xl font-extrabold leading-tighter mb-4 tracking-wide'
                data-aos='zoom-y-out'
              >
                <span className='bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                  Molo{' '}
                </span>
              </h1>
              <div className='max-w-3xl mx-auto px-20'>
                <p
                  className='text-md hidden lg:block text-white mb-8 tracking-wide italic'
                  data-aos='zoom-y-out'
                  data-aos-delay='150'
                >
                  A decentralized Video sharing dApp.
                </p>

                <button
                  className='items-center text-[#F7F7F7] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg  font-medium  p-4 mt-8 shadow-lg shadow-purple-500/50'
                  onClick={connectWallet}
                >
                  {MetamaskWalletIsConnected ? (
                    <span>Loading Videos... Please Wait.</span>
                  ) : (
                    <span>Connect wallet</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage
