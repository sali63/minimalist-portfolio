import _ from 'lodash';
import { useEffect, useState } from 'react';

export const getImagePath = (arr, keyword, filePath) => {
  const img = arr.find((arr) => arr.name.includes(keyword));

  if (!filePath) return _.get(img, 'src');
  return _.get(img, filePath);
};

export const arrToObject = (arr) => {
  const imagesObject = arr.reduce((acc, currImgObj) => {
    const { device } = currImgObj;
    acc[device] = currImgObj[device].reduce((currImgAcc, currImg) => {
      const { filenameShort } = currImg;
      currImgAcc[filenameShort] = currImg;
      return currImgAcc;
    }, {});
    return acc;
  }, {});
  return imagesObject;
};

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export const getImageParams = (device, imageType) => {
  if (device === 'mobile')
    return {
      src: mobile[imageType].imageRelativePath,
      width: mobile[imageType].dimensions.width,
      height: mobile[imageType].dimensions.height,
    };
  if (device === 'tablet')
    return {
      src: tablet[imageType].imageRelativePath,
      width: tablet[imageType].dimensions.width,
      height: tablet[imageType].dimensions.height,
    };
  if (device === 'desktop')
    return {
      src: desktop[imageType].imageRelativePath,
      width: desktop[imageType].dimensions.width,
      height: desktop[imageType].dimensions.height,
    };
};
