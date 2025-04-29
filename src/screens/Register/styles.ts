import {fontPixel, pixelSizeVertical} from '@utils/responsiveDimensions';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputFieldWrapper: {
    gap: 10,
  },
  backToLoginText: {
    color: 'blue',
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    fontSize: fontPixel(15),
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: pixelSizeVertical(25),
  },
  headerText: {
    fontSize: fontPixel(25),
    paddingBottom: pixelSizeVertical(20),
    fontWeight: '600',
    textAlign: 'center',
  },
});
