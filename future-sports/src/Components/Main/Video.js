// Import necessary libraries
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import MyButton from '../button.js';

// Define the Video component
const Video = () => {
  // Define the videos array
  const videos = [
    // Add the videos to the array
    {
      id: 1, // Add an id to each video
      url: require('../../videos/vid1.mp4'), // Add the video url
      title: 'Video 1', // Add the video title
    },
    {
      id: 2,
      url: require('../../videos/vid2.mp4'),
      title: 'Video 2',
    },
    {
      id: 3,
      url: require('../../videos/vid3.mp4'),
      title: 'Video 3',
    },
  ];

  // Initialize currentVideo state with the first video
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const handleClick = (video) => setCurrentVideo(video);

  // Render the Video component
  return (
    // Render JSX for Video
    <section className="video-section">
      <a id="videos"></a> {/* Navigation Link */}
      <h2>Video Section</h2>
      <div className="video-wrapper"> 
        <div className="list-wrapper">
          <h3>Video List</h3>
          <div className="video-items"> 
            {/* Loop through the videos array */}
            {videos.map((video) => (  
              <div key={video.id} className="video-item"> {/* Add a key prop to each video */}
                <MyButton label={video.title} onClick={() => handleClick(video)} /> {/* Add an onClick event handler */}
              </div>
            ))}
          </div>
        </div>
        <div className="video-player"> 
          <h3>{currentVideo.title}</h3> {/* Add the video title */}
          <ReactPlayer url={currentVideo.url} controls={true} playing={true} /> {/* Add the video player */}
        </div>
      </div>
    </section>
  );
};

// Export the Video component
export default Video;