import React, { Component } from 'react'
import NavBar from '../components/NavBar'

class Header extends Component {
  render() {
    const { searchByTitle } = this.props

    return (
      <div className='relative mb-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <NavBar />
        <div className='absolute inset-x-0 bottom-0'>
          <svg
            viewBox='0 0 224 12'
            fill='currentColor'
            className='w-full -mb-1 text-[#1a1c1f]'
            preserveAspectRatio='none'
          >
            <path d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z' />
          </svg>
        </div>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center'>
            <form className='flex flex-col items-center w-full mb-4 md:flex-row md:px-16'>
              {searchByTitle ? (
                <input
                  onChange={(e) => searchByTitle(e.target.value)}
                  placeholder='Type to search'
                  type='text'
                  className='flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline z-30'
                />
              ) : null}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
