import React, { Component } from 'react'

// This function is a functional component that takes in 2 props: "horizontalLayout" and "video"
// "horizontalLayout" is a boolean value that determines the layout of the component
// "video" is an object that contains information about the video being displayed
class PerVideo extends Component {
  render() {
    const { horizontalLayout, video } = this.props
    return (
      <div
        // Here we are using a template literal to dynamically assign class names based on the value of "horizontal"
        // "flex flex-row mx-5 mb-5  item-center justify-center cursor-pointer" will be assigned if "horizontal" is true
        // "flex flex-col m-5 cursor-pointer" will be assigned if "horizontal" is false
        className={`${
          horizontalLayout
            ? 'flex flex-row mx-auto mb-5  item-center justify-center cursor-pointer'
            : 'flex flex-col m-5 cursor-pointer'
        } `}
      >
        <img
          // Here we are using a template literal to dynamically assign class names based on the value of "horizontalLayout"
          // "object-cover rounded-lg w-60" will be assigned if "horizontalLayout" is true
          // "object-cover rounded-lg w-full h-40" will be assigned if "horizontalLayout" is false
          className={
            horizontalLayout
              ? 'object-cover rounded-lg w-60  '
              : 'object-cover rounded-lg w-full h-40'
          }
          // Here we are using the "video" prop to display the "video's thumbnail" using its thumbnailHash
          src={`https://ipfs.io/ipfs/${video.thumbnailHash}`}
          alt=''
        />

        <div className={horizontalLayout && 'ml-3  w-80'}>
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
            <strong>Video Hash: </strong>{' '}
            {` ${video?.hash?.slice(0, 4)}...${video?.hash?.slice(38)}`}
          </p>
          <p className='text-sm flex items-center text-[#878787] mt-1'>
            <strong>Owner Address: </strong>
            {` ${video?.author?.slice(0, 4)}...${video?.author?.slice(38)}`}
          </p>
          {console.log(video)}
        </div>
      </div>
    )
  }
}

export default PerVideo
