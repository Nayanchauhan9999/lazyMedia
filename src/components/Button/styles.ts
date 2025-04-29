import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
} from '@utils/responsiveDimensions';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    borderRadius: 8,
    height: heightPixel(50),
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    fontSize: fontPixel(18),
    paddingHorizontal: pixelSizeHorizontal(25),
  },
});
