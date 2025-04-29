import {Dimensions, PixelRatio} from 'react-native';

const getResponsiveDimensions = () => {
  const {width: screenWidth, height: screenHeight} = Dimensions.get('screen'); // Use physical screen dimensions
  const widthBaseScale = screenWidth / 414; // Adjust baseline if needed
  const heightBaseScale = screenHeight / 896; // Adjust baseline if needed

  return {
    widthPixel: (size: number) =>
      Math.round(PixelRatio.roundToNearestPixel(size * widthBaseScale)), // use for width
    heightPixel: (size: number) =>
      Math.round(PixelRatio.roundToNearestPixel(size * heightBaseScale)), // use for height
    fontPixel: (size: number) =>
      Math.round(PixelRatio.roundToNearestPixel(size * heightBaseScale)), // Consider rem or em
    pixelSizeVertical: (size: number) => heightPixel(size), //use on margin and padding
    pixelSizeHorizontal: (size: number) => widthPixel(size), //use on margin and padding
    screenWidth,
    screenHeight,
  };
};

export const {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  screenWidth,
  screenHeight,
} = getResponsiveDimensions();
