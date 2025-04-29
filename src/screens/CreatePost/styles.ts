import {
  fontPixel,
  heightPixel,
  pixelSizeVertical,
  screenHeight,
  screenWidth,
  widthPixel,
} from '@utils/responsiveDimensions';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerText: {
    fontSize: fontPixel(22),
    fontWeight: '600',
  },
  container: {
    gap: 15,
  },
  selectPhotosText: {
    color: 'blue',
  },
  image: {
    height: (screenHeight * 40) / 100,
    width: screenWidth,
  },
  flatlistContainer: {
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: pixelSizeVertical(25),
    gap: 10,
  },
  backButton: {
    backgroundColor: '#00000010',
    height: heightPixel(40),
    width: widthPixel(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
});
