import React, { useEffect } from 'react';
import { preloadImages } from '../utils/preloadImages';

/**
 * Image Preloader Component
 * 
 * Preloads images to improve performance by caching them
 * 
 * @component
 */

const ImagePreloader: React.FC = () => {
  useEffect(() => {
    const imageUrls = [
      '/images/weather/clear.jpg',
      '/images/weather/clouds.jpg',
      '/images/weather/rain.jpg',
      '/images/weather/snow.jpg',
      '/images/weather/thunder.jpg',
      '/images/weather/mist.jpg',
      '/images/weather/default.jpg'
    ];
    
    preloadImages(imageUrls);
  }, []);

  return null;
};

export default ImagePreloader; 