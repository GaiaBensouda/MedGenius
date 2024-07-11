import React from 'react';
import Lottie from 'react-lottie';
import brainAnimationData from './assets/brain.json'; 

const BrainAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: brainAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default BrainAnimation;
