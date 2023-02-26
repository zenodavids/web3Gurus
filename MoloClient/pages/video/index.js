import React, { useEffect, useState } from 'react'
import { useApolloClient, gql } from '@apollo/client'
import PerVideo from '../../components/PerVideo'
import PlayVideo from '../../components/VideoPage'
import NavBar from '../../components/NavBar'

// Define a functional component called VideoPage
const VideoPage = () => {
  // Define two pieces of state: video and AllVideos
  const [video, setVideo] = useState(null)
  const [AllVideos, setAllVideos] = useState([])

  // Define a function called videoUrls to parse query parameters from the URL
  const videoUrls = () => {
    var urls = {}
    // Get query parameters from the URL and store them in urls object
    var parts = window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        urls[key] = value
      }
    )
    return urls // Return the urls object
  }

  // Define a GraphQL query to fetch all videos
  const allVideos = gql`
    query videos(
      $first: Int
      $skip: Int
      $orderBy: Video_orderBy
      $orderDirection: OrderDirection
      $where: Video_filter
    ) {
      videos(
        first: $first
        skip: $skip
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        hash
        title
        description
        thumbnailHash
        createdAt
        author
      }
    }
  `

  // Get the ApolloClient instance using the useApolloClient hook
  const ApolloClient = useApolloClient()

  // Define a function called UploadedVideos to fetch all videos using the ApolloClient instance
  const UploadedVideos = () => {
    ApolloClient.query({
      query: allVideos, // Use the allVideos query
      variables: {
        first: 20,
        skip: 0,
        orderBy: 'createdAt',
        orderDirection: 'desc',
        where: {},
      },
      fetchPolicy: 'network-only', // Force a network request every time this function is called
    })
      .then(({ data }) => {
        // Update the state with the fetched data
        setAllVideos(data.videos)
        const video = data?.videos?.find((video) => video.id === videoUrls().id)
        setVideo(video)
      })
      .catch((err) => {
        // Log and display an error message if an error occurs
        console.error('video container error', err)
        alert('Something went wrong. please try again.!', err.message)
      })
  }

  // Use the useEffect hook to call the UploadedVideos function once the component mounts
  useEffect(() => {
    UploadedVideos()
  }, [])

  // Render the NavBar and the video player with related videos
  return (
    <>
      <NavBar />
      <div className='w-full   bg-[#1a1c1f]  flex flex-row'>
        <div className='flex-1 flex flex-col'>
          {video && (
            <div className='flex flex-col m-10 justify-between lg:flex-row'>
              <div className='lg:w-4/6 w-6/6 pr-5'>
                <PlayVideo video={video} />
              </div>
              <div className='w-2/6'>
                <h4 className='text-md font-bold text-white pl-5 mb-3'>
                  Related Videos
                </h4>
                {AllVideos.map((video) => (
                  <div
                    onClick={() => {
                      setVideo(video)
                    }}
                    key={video.id}
                  >
                    <PerVideo video={video} horizontalLayout={true} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default VideoPage
