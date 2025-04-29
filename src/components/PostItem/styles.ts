import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  screenHeight,
  screenWidth,
  widthPixel,
} from '@utils/responsiveDimensions';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  image: {
    height: (screenHeight * 40) / 100,
    width: screenWidth - pixelSizeHorizontal(25) * 2 - 2,
    resizeMode: 'stretch',
  },
  container: {
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 15,
  },
  userDetailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: pixelSizeVertical(10),
    gap: 10,
    paddingLeft: pixelSizeVertical(10),
  },
  profilePicture: {
    height: heightPixel(35),
    width: widthPixel(35),
    borderRadius: 10000,
  },
  userName: {
    fontSize: fontPixel(16),
    fontWeight: '500',
  },
  title: {
    fontWeight: '600',
    fontSize: fontPixel(18),
  },
  description: {
    fontSize: fontPixel(14),
    color: 'gray',
  },
  footer: {
    padding: pixelSizeVertical(10),
  },
});
