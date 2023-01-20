import React, { useEffect, useState } from 'react'
import { useApolloClient, gql } from '@apollo/client'
import Video from '../../components/Video'
import { Header } from '../../components/Header'
import { useMemo, useCallback } from 'react'
export default function Main() {
  // Creating a state to store the uploaded video
  const [videos, setVideos] = useState([])
  const [search, setSearch] = useState('')

  // Get the client from the useApolloClient hook
  const client = useApolloClient()

  // Query the videos from the the graph
  const GET_VIDEOS = useMemo(
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

  // Function to get the videos from the graph
  const getVideos = useCallback(async () => {
    // Query the videos from the graph
    client
      .query({
        query: GET_VIDEOS,
        variables: {
          first: 200,
          skip: 0,
          orderBy: 'createdAt',
          orderDirection: 'desc',
          // NEW: Added where in order to search for videos
          where: {
            ...(search && {
              title_contains_nocase: search,
              category_contains_nocase: search,
            }),
          },
        },
        fetchPolicy: 'network-only',
      })
      .then(({ data }) => {
        // Set the videos to the state
        setVideos(data.videos)
      })
      .catch((err) => {
        alert('Something went wrong. please try again.!', err.message)
      })
  }, [GET_VIDEOS, client, search])

  useEffect(() => {
    // Runs the function getVideos when the component is mounted and also if there is a change in the search stae
    getVideos()
  }, [getVideos, search])

  return (
    <div className='w-full bg-[#1a1c1f] flex flex-row'>
      <div className='flex-1 h-screen flex flex-col'>
        <Header
          search={(e) => {
            setSearch(e)
          }}
        />
        <div className='flex flex-row flex-wrap'>
          {videos.map((video) => {
            return (
              <div
                key={video.id}
                className='w-80'
                onClick={() => {
                  // Navigation to the video screen (which we will create later)
                  window.location.href = `/video?id=${video.id}`
                }}
              >
                <Video video={video} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
