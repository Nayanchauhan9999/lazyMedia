import {fontPixel, heightPixel} from '@utils/responsiveDimensions';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    height: heightPixel(56),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: fontPixel(18),
    color: 'white',
  },
});
