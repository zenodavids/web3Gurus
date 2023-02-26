//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MoloContract {

    // A boolean variable to check if the contract is paused
    bool public _paused;
    
    // A counter for the total number of videos uploaded
    uint256 public numberOfVideos;

    // Define a struct to represent a video
    struct Video {
        uint256 id; // Unique ID for the video
        string hash; // IPFS hash of the video file
        string title; // Title of the video
        string description; // Description of the video
        string location; // Location of the video
        string category; // Category of the video
        string thumbnailHash; // IPFS hash of the video thumbnail
        string date; // Date when the video was uploaded
        address author; // Address of the author who uploaded the video
    }

    // A mapping to store the video IDs for each user
    mapping(address => uint256[]) public userVideos;

    // A mapping to store the Video struct for each video ID
    mapping(uint256 => Video) public videos;

    // An event to emit when a new video is uploaded
    event UploadedVideo(uint256 id, string hash, string title, string description, string location, string category, string thumbnailHash, string date, address author);

       // An event to emit when a new video is deleted
    event DeletedVideo(uint256 id);

    // A function to get all the videos uploaded by the user calling the function
    function getUserVideos() public view returns (Video[] memory) {
        
        // Get the list of video IDs for the current user
        uint256[] memory userVideoIds = userVideos[msg.sender];
        
        // Create a new array of Video structs to store the user's videos
        Video[] memory userVideosArray = new Video[](userVideoIds.length);
        
        // Loop through the user's video IDs and add the corresponding Video struct to the new array
        for (uint256 i = 0; i < userVideoIds.length; i++) {
            userVideosArray[i] = videos[userVideoIds[i]];
        }
        
        // Return the array of Video structs representing the user's videos
        return userVideosArray;
    }
    
// pause if there is an emergency
        modifier onlyWhenNotPaused {
        require(!_paused, "Contract currently paused");
        _;
    }

    // A function to upload a new video to the platform
    function uploadVideo(string memory _videoHash, string memory _title, string memory _description, string memory _location, string memory _category, string memory _thumbnailHash, string memory _date) public {
        
        // Require that the video hash and title are not empty, and the sender address is not zero
        require(bytes(_videoHash).length > 0);
        require(bytes(_title).length > 0);
        require(msg.sender != address(0));

        // Increment the video counter to generate a new unique ID for the video
        numberOfVideos++;
        
        // Create a new Video struct with the given parameters and add it to the videos mapping
        videos[numberOfVideos] = Video(
            numberOfVideos,
            _videoHash,
            _title,
            _description,
            _location,
            _category,
            _thumbnailHash,
            _date,
            msg.sender
        );
        
        // Emit an event indicating that a new video has been uploaded
        emit UploadedVideo(
            numberOfVideos,
            _videoHash,
            _title,
            _description,
            _location,
            _category,
            _thumbnailHash,
            _date,
            msg.sender
        );
    }

    // A function to delete a video by ID
    function deleteVideo(uint256 _videoId) public {
        // Get the video from the videos mapping
        Video storage video = videos[_videoId];

        // Ensure the video exists and the caller is the author
        require(video.id == _videoId, "Video does not exist");
        require(video.author == msg.sender, "Not authorized to delete video");

        // Remove the video ID from the userVideos mapping for the author
        uint256[] storage authorVideos = userVideos[msg.sender];
        for (uint i = 0; i < authorVideos.length; i++) {
            if (authorVideos[i] == _videoId) {
                authorVideos[i] = authorVideos[authorVideos.length - 1];
                authorVideos.pop();
                break;
            }
        }

        // Remove the video from the videos mapping
        delete videos[_videoId];

        // Emit an event indicating the video has been deleted
        emit DeletedVideo(_videoId);
    }

}
