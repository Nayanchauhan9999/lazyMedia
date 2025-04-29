import {fontPixel, pixelSizeVertical} from '@utils/responsiveDimensions';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  footerView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: pixelSizeVertical(20),
  },
  exploreText: {
    color: 'blue',
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    fontSize: fontPixel(15),
  },
  orText: {
    fontSize: fontPixel(20),
    paddingVertical: pixelSizeVertical(10),
  },
  inputFieldWrapper: {
    gap: 15,
    paddingTop: pixelSizeVertical(15),
  },
});
