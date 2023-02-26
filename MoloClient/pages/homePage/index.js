import React, { useEffect, useState, useMemo, useCallback } from 'react'
// Importing necessary hooks and components from react and apollo client library
import { useApolloClient, gql } from '@apollo/client'
import PerVideo from '../../components/PerVideo'
import Header from '../../components/Header'

// ===================================================================
const TESTshowAllUploadedVideos = {
  /* Defining an object that contains video data for multiple owners.*/
  'Owner A': [
    {
      id: 1,
      title: 'Video A1',
      description: 'This is a video by Owner A.',
      url: 'https://example.com/video-a1.mp4',
    },
    {
      id: 2,
      title: 'Video A2',
      description: 'This is another video by Owner A.',
      url: 'https://example.com/video-a2.mp4',
    },
  ],
  'Owner B': [
    {
      id: 3,
      title: 'Video B1',
      description: 'This is a video by Owner B.',
      url: 'https://example.com/video-b1.mp4',
    },
    {
      id: 4,
      title: 'Video B2',
      description: 'This is another video by Owner B.',
      url: 'https://example.com/video-b2.mp4',
    },
  ],
}
// ===================================================================

const HomePage = () => {
  // Setting initial state values for videos and SearchByVideoTitle using useState hook
  const [videos, setStoreAllVideos] = useState([])
  const [SearchByVideoTitle, setSearchByVideoTitle] = useState('')

  // Creating a memoized GraphQL query to get all videos
  const getAllVideos = useMemo(
    () => gql`
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
          thumbnailHash
          description
          author
        }
      }
    `,
    []
  )

  // Accessing the Apollo client instance
  const ApolloClient = useApolloClient()

  // Defining a memoized callback function to fetch videos from the GraphQL API
  const getAllQueriedVideos = useCallback(async () => {
    // Sending a query to fetch videos using ApolloClient
    ApolloClient.query({
      query: getAllVideos,
      variables: {
        first: 200,
        skip: 0,
        orderBy: 'createdAt',
        orderDirection: 'desc',
        // Conditionally adding filters based on the search query
        where: {
          ...(SearchByVideoTitle && {
            title_contains_nocase: SearchByVideoTitle,
            category_contains_nocase: SearchByVideoTitle,
          }),
        },
      },
      // Setting fetch policy to network-only to ensure fresh data is always retrieved
      fetchPolicy: 'network-only',
    })
      .then(({ data }) => {
        // Grouping the videos by their author and setting the state of videos
        const ownerGroups = data.videos.reduce((groups, video) => {
          const owner = video.author
          if (!groups[owner]) {
            groups[owner] = []
          }
          groups[owner].push(video)
          return groups
        }, {})
        setStoreAllVideos(ownerGroups)
      })
      .catch((err) => {
        // Displaying an error message if something goes wrong
        alert('Something went wrong. please try again.!', err.message)
      })
  }, [getAllVideos, ApolloClient, SearchByVideoTitle])

  // Calling getAllQueriedVideos when the component mounts and when the search query changes
  useEffect(() => {
    getAllQueriedVideos()
  }, [getAllQueriedVideos, SearchByVideoTitle])

  // Rendering the header and videos on the homepage
  return (
    <>
      <Header
        // Passing a callback function to update the search query to the Header component
        SearchByVideoTitle={(e) => {
          setSearchByVideoTitle(e)
        }}
      />
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[#1a1c1f]'>
        {/* Mapping over the videos object to display videos by each owner. */}
        {Object.entries(videos).map(([owner, videos]) => {
          return (
            <div key={owner} className='px-4 pb-5 mx-5'>
              {/* Displaying the owner's name. */}
              <h2 className='text-white text-lg'>{`Videos by ${owner}`}</h2>
              <div className='grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
                {/* // Mapping over the videos array for each owner. */}
                {videos.map((video) => {
                  return (
                    <div
                      key={video.id}
                      onClick={() => {
                        // Redirecting to the video page when the video thumbnail is clicked.
                        window.location.href = `/video?id=${video.id}`
                      }}
                      className='overflow-hidden transition-shadow duration-300 bg-transparent rounded'
                    >
                      {/* Rendering the Video component with the video data as props. */}
                      <PerVideo video={video} />
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default HomePage
