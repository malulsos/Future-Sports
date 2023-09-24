import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
  const videos = [
    {
      id: 1,
      url: require('../../videos/vid1.mp4'),
      title: 'Video 1',
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

  return (
    <section className="video-section">
      <a id="videos"></a>
      <h2>Video Section</h2>
      <div className="video-wrapper">
        <div className="list-wrapper">
          <h3>Video List</h3>
          <div className="video-items">
            {videos.map((video) => (
              <div key={video.id} className="video-item">
                <button onClick={() => handleClick(video)}>{video.title}</button>
              </div>
            ))}
          </div>
        </div>
        <div className="video-player">
          <h3>{currentVideo.title}</h3>
          <ReactPlayer url={currentVideo.url} controls={true} playing={true} />
        </div>
      </div>
    </section>
  );
};

export default Video;