// importing axios
import axios from 'axios'

const saveToIPFS = async (file) => {
  // create a new multipart form data
  const formData = new FormData()
  // add file to the form data
  formData.append('file', file)

  var config = {
    method: 'post',
    url: 'https://api.web3.storage/upload',
    headers: {
      //   Authorization: `Bearer WEB3_STORAGE_TOKEN`,
      Authorization: `Bearer ${process.env.WEB3_STORAGE_TOKEN}`,
      'Content-Type': 'text/plain',
    },
    data: formData,
  }

  // Posting the form data to the IPFS API
  const response = await axios(config)
  // returning the CID
  return response.data.cid
}

export default saveToIPFS
