import React from 'react'

class NavBar extends React.Component {
  render() {
    return (
      <div className=' items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
          <div className='relative flex items-center justify-between'>
            <a
              href='/homePage'
              aria-label='MOLO DAPP'
              title='MOLO DAPP'
              className='inline-flex items-center'
            >
              <span className='ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase'>
                Molo Dapp
              </span>
            </a>
            <ul className='flex items-center space-x-8 lg:flex'>
              <li>
                <a
                  href='/upload'
                  className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                  aria-label='Upload a Video'
                  title='Upload a Video'
                >
                  Upload a Video
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
