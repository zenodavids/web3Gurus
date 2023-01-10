import React from 'react'
import moment from 'moment'

// This function is a functional component that takes in 2 props: "horizontal" and "video"
// "horizontal" is a boolean value that determines the layout of the component
// "video" is an object that contains information about the video being displayed
export default function Video({ horizontal, video }) {
  return (
    <div
      // Here we are using a template literal to dynamically assign class names based on the value of "horizontal"
      // "flex flex-row mx-5 mb-5  item-center justify-center cursor-pointer" will be assigned if "horizontal" is true
      // "flex flex-col m-5 cursor-pointer" will be assigned if "horizontal" is false
      className={`${
        horizontal
          ? 'flex flex-row mx-5 mb-5  item-center justify-center cursor-pointer'
          : 'flex flex-col m-5 cursor-pointer'
      } `}
    >
      <img
        // Here we are using a template literal to dynamically assign class names based on the value of "horizontal"
        // "object-cover rounded-lg w-60" will be assigned if "horizontal" is true
        // "object-cover rounded-lg w-full h-40" will be assigned if "horizontal" is false
        className={
          horizontal
            ? 'object-cover rounded-lg w-60  '
            : 'object-cover rounded-lg w-full h-40'
        }
        // Here we are using the "video" prop to display the "video's thumbnail" using its thumbnailHash
        src={`https://ipfs.io/ipfs/${video.thumbnailHash}`}
        alt=''
      />

      <div className={horizontal && 'ml-3  w-80'}>
        {/* This component renders the "video title" using the "video" prop */}
        <h4 className='text-md font-bold dark:text-white mt-3'>
          {video.title}
        </h4>
        {/* This component renders the "video description" using the "video" prop */}
        <p className='text-sm flex items-center text-[#878787] mt-1'>
          {video.description.length >= 37
            ? `${video.description.slice(0, 37)}...`
            : video.description}
        </p>
        <p className='text-sm flex items-center text-[#878787] mt-1'>
          IPFS hash: {video?.hash?.slice(0, 15)} ...
        </p>
      </div>
    </div>
  )
}
