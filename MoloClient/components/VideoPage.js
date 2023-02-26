// Import React and Component from the 'react' module
import React, { Component } from 'react'
// Import the VideoPlayer component from the './VideoPlayer' file
import VideoPlayer from './VideoPlayer'

// Define a new class-based component called VideoPage that extends the Component class
class VideoPage extends Component {
  // Define the render method of the VideoPage component
  render() {
    // Destructure the video prop from the component's props
    const { video } = this.props

    // Return JSX that renders the VideoPlayer component and some video information
    return (
      <div>
        <VideoPlayer hash={video.hash} />
        <div className='flex justify-between flex-row py-4'>
          <div className='pl-4'>
            <p className='text-gray-500 mt-1 font-light'>
              {/* Render the video's hash (first 4 and last 4 characters) */}
              <strong>Video Hash:</strong>{' '}
              {`${video.hash.slice(0, 4)}...${video.hash.slice(38)}`}
            </p>
            {/* Render the video's title */}
            <h3 className='text-2xl dark:text-white'>{video.title}</h3>
            <p className='text-gray-500 mt-1'>
              {/* Render the video's description */}
              <strong>Description:</strong> {video.description} •
            </p>
          </div>
        </div>
      </div>
    )
  }
}

// Export the VideoPage component as the default export
export default VideoPage
