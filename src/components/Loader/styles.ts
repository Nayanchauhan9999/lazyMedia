import {heightPixel} from '@utils/responsiveDimensions';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#00000080',
    zIndex: 1000,
  },
  lottieFile: {
    height: heightPixel(250),
    width: '100%',
  },
});
