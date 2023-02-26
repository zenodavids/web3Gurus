export const CONTRACT_ADDRESS = '0x4F209047Aa3644693D4CB8A2123D06CA2Dd7642d'
export const OWNER_ADDRESS = '0xc8A81E39a7c656Be15FA062e5D57daD60304fE0D'
export const CONTRACT_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'DeletedVideo',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'hash',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'title',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'location',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'category',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'thumbnailHash',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'date',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'author',
        type: 'address',
      },
    ],
    name: 'UploadedVideo',
    type: 'event',
  },
  {
    inputs: [],
    name: '_paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_videoId',
        type: 'uint256',
      },
    ],
    name: 'deleteVideo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getUserVideos',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'hash',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'title',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'description',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'location',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'category',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'thumbnailHash',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'date',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'author',
            type: 'address',
          },
        ],
        internalType: 'struct MoloContract.Video[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'numberOfVideos',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_videoHash',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_title',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_description',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_location',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_category',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_thumbnailHash',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_date',
        type: 'string',
      },
    ],
    name: 'uploadVideo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'userVideos',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'videos',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'hash',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'title',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'location',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'category',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'thumbnailHash',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'date',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'author',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
