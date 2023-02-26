import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { BiCloud, BiMusic, BiPlus } from 'react-icons/bi'
import { create } from 'ipfs-http-client'
import contractDetails from '../../constants/contractDetails'
// import ipfs from '../../constants/ipfs'
// import { useCreateAsset } from '@livepeer/react'

const projectId = '2EOjlt0j1XeKHmsL8Z5I7FCmrAl'
const projectSecret = '387d00be447f045f8499df0004619942'

const InfuraAuth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

export default function VideoUpload() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [video, setVideo] = useState('')

  const thumbnailRef = useRef()
  const videoRef = useRef()

  const router = useRouter()

  const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    apiPath: '/api/v0',
    headers: {
      authorization: InfuraAuth,
    },
  })

  const backToHome = async () => {
    router.push(`/homePage`)
  }

  const uploadVideoToIPFS = async () => {
    if (
      title === '' ||
      description === '' ||
      category === '' ||
      location === '' ||
      thumbnail === '' ||
      video === ''
    ) {
      alert('Please fill all the fields')
      return
    }

    await uploadVideoThumbnail(thumbnail)
    router.push(`/homePage`)
  }

  const uploadVideoThumbnail = async (thumbnail) => {
    try {
      const added = await client.add(thumbnail)

      uploadVideo(added.path)

      router.push(`/upload`)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  const uploadVideo = async (thumbnail) => {
    try {
      const added = await client.add(video)

      await saveVideo(added.path, thumbnail)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  const saveVideo = async (video, thumbnail) => {
    let contract = await contractDetails()

    let UploadedDate = String(new Date())

    await contract.uploadVideo(
      video,
      title,
      description,
      location,
      category,
      thumbnail,
      UploadedDate
    )
  }

  return (
    <div className='w-full h-full min-h-screen bg-[#1a1c1f] flex flex-row'>
      <div className='flex-1 flex flex-col '>
        <div className='mt-5 mr-10 flex justify-end'>
          <div className='flex items-center'>
            <button
              className='bg-transparent  text-pink-500 py-2 px-6 border rounded-lg  border-gray-600  mr-6 shadow-2xl hover:shadow-purple-500/50 '
              onClick={() => {
                backToHome()
              }}
            >
              Back To Home
            </button>
            <button
              onClick={() => {
                uploadVideoToIPFS()
              }}
              className=' text-[#F7F7F7] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2  rounded-lg flex px-4 justify-between flex-row items-center shadow-2xl hover:shadow-purple-500/50'
            >
              <BiCloud />
              <p className='ml-2'>Upload Video</p>
            </button>
          </div>
        </div>
        <div className='flex flex-col m-10     mt-1  lg:flex-row'>
          <div className='flex lg:w-3/4 flex-col '>
            <label className='text-[#F7F7F7]  text-sm'>Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Whats the Title of the video?'
              className='w-[90%] text-white placeholder:text-gray-600  rounded-md mt-2 h-12 p-2   bg-[#1a1c1f] shadow-2xl focus:outline-none'
            />
            <label className='text-[#F7F7F7] mt-5'>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Give a detailed description of the video.'
              className='w-[90%] text-white h-32 placeholder:text-gray-600  rounded-md mt-2 p-2   bg-[#1a1c1f] shadow-2xl focus:outline-none'
            />

            <div className='flex flex-row mt-10 w-[90%]  justify-between'>
              <div className='flex flex-col w-2/5    '>
                <label className='text-[#F7F7F7]  text-sm'>Location</label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type='text'
                  placeholder='Your City - Your Country'
                  className='w-[90%] text-white placeholder:text-gray-600  rounded-md mt-2 h-12 p-2   bg-[#1a1c1f] shadow-2xl focus:outline-none'
                />
              </div>
              <div className='flex flex-col w-2/5    '>
                <label className='text-[#F7F7F7]  text-sm'>Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className='w-[90%] text-white placeholder:text-gray-600  rounded-md mt-2 h-12 p-2   bg-[#1a1c1f] shadow-2xl focus:outline-none'
                >
                  <option>Please Select a Category</option>
                  <option>Social Media Marketing/Management</option>
                  <option>Copywriting</option>
                  <option>Project Management</option>
                  <option>Web Development</option>
                  <option>Education</option>
                  <option>Science & Technology</option>
                  <option>SEO</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <label className='text-[#F7F7F7]  mt-3 text-sm'>Thumbnail</label>

            <div
              onClick={() => {
                thumbnailRef.current.click()
              }}
              className='w-64 shadow-2xl rounded-md mt-2 p-2  h-20 items-center justify-center flex'
            >
              {thumbnail ? (
                <img
                  onClick={() => {
                    thumbnailRef.current.click()
                  }}
                  src={URL.createObjectURL(thumbnail)}
                  alt='thumbnail'
                  className='h-full rounded-md'
                />
              ) : (
                <BiPlus size={40} color='gray' />
              )}
            </div>

            <input
              type='file'
              className='hidden'
              ref={thumbnailRef}
              onChange={(e) => {
                setThumbnail(e.target.files[0])
              }}
            />
          </div>

          <div
            onClick={() => {
              videoRef.current.click()
            }}
            className={
              video
                ? ' w-96   rounded-md  h-64 items-center justify-center flex'
                : ' shadow-2xl  w-96 rounded-md mt-8 h-60 items-center justify-center flex'
            }
          >
            {video ? (
              <video
                controls
                src={URL.createObjectURL(video)}
                className='h-full rounded-md'
              />
            ) : (
              <p className='text-[#9CA3AF]'>Upload Video ➕</p>
            )}
          </div>
        </div>
        <input
          type='file'
          className='hidden'
          ref={videoRef}
          accept={'video/*'}
          onChange={(e) => {
            setVideo(e.target.files[0])
            console.log(e.target.files[0])
          }}
        />
      </div>
    </div>
  )
}
