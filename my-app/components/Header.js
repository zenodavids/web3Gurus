import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

export const Header = ({ search }) => {
  return (
    <header className='w-full flex justify-between h-20 items-center border-b p-4 border-[#202229]'>
      <div className=' w-1/3    '>
        <img
          width={80}
          src={'https://i.ibb.co/JHn1pjz/logo.png'}
          alt='YouTube Logo'
        />
      </div>
      <div className=' w-1/3 flex justify-center items-center'>
        {search ? (
          <input
            type='text'
            onChange={(e) => search(e.target.value)}
            placeholder='Type to search'
            className=' border-0 bg-transparent focus:outline-none text-white'
          />
        ) : null}
      </div>
      <div className=' w-1/3 flex justify-end'>
        <AiOutlinePlusCircle
          onClick={() => {
            window.location.href = '/upload'
          }}
          size='30px'
          className='mr-8 fill-whiteIcons dark:fill-white cursor-pointer'
        />
      </div>
    </header>
  )
}

// import React from 'react'
// import { AiOutlinePlusCircle } from 'react-icons/ai'
// import { TfiVideoClapper } from 'react-icons/tfi'

// export const Header = ({ search }) => {
//   return (
//     <header className='w-full flex justify-between h-20 items-center border-b p-4 border-[#202229]'>
//       <div className=' w-1/3    '>
//         {
//           <TfiVideoClapper className='text-lg text-purple-500 md:text-6xl font-extrabold' />
//         }
//       </div>
//       <div className=' w-1/3 flex justify-center items-center'>
//         {search ? (
//           <input
//             type='text'
//             onChange={(e) => search(e.target.value)}
//             placeholder='Type to search'
//             className=' border-0 bg-transparent focus:outline-none text-white'
//           />
//         ) : null}
//       </div>
//       <div className=' w-1/3 flex justify-end'>
//         <AiOutlinePlusCircle
//           onClick={() => {
//             window.location.href = '/upload'
//           }}
//           size='30px'
//           className='mr-8 fill-whiteIcons text-purple-500 cursor-pointer'
//         />
//       </div>
//     </header>
//   )
// }
