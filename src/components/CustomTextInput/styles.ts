import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '@utils/responsiveDimensions';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  view: {
    height: heightPixel(50),
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: 'black',
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    marginLeft: pixelSizeHorizontal(15),
    height: heightPixel(50),
    padding: 0,
    fontSize: fontPixel(14),
  },
  labelText: {
    fontSize: fontPixel(16),
    paddingBottom: pixelSizeVertical(7),
    textTransform: 'capitalize',
  },
  star: {},
});
