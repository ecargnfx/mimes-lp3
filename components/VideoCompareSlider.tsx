// VideoCompareSlider.tsx
import React, { useState, useEffect } from 'react';
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';

// Custom video component
const VideoComponent = ({ src, alt }) => {
  return (
    <video width="100%" height="100%" autoPlay loop muted>
      <source src={src} type="video/mp4" />
      {alt}
    </video>
  );
};

const VideoCompareSlider = () => {
  const changePositionOnHover = true;  

  return (
    <div style={{ width: '100%', height: '1000%', flexGrow: 1 }}>
      <ReactCompareSlider
        itemOne={
          <VideoComponent
            src="/temple-fight-in-1.mov"
            alt="Video one"
          />
        }
        itemTwo={
          <VideoComponent
            src="temple-fight-out-3.mov"
            alt="Video two"
          />
        }
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              border: 0,
              backdropFilter: 'none',
              WebkitBackdropFilter: 'none',
              boxShadow: 'none'
            }}
            linesStyle={{ opacity: 0 }}
          />
        }
        style={{ width: '100%', height: '100%' }}
        changePositionOnHover={changePositionOnHover}
      />
    </div>
  );
};

export default VideoCompareSlider;
