import React from 'react';

const VideoPlayer = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#000' }}>
      <video width="100%" height="auto" autoPlay loop muted playsInline>
        <source src="/ad.mp4" type="video/mp4" />
        お使いのブラウザはビデオタグをサポートしていません。
      </video>
    </div>
  );
}

export default VideoPlayer;
