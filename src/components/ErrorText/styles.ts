import {
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '@utils/responsiveDimensions';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  errorText: {
    marginVertical: pixelSizeVertical(4),
    color: 'red',
    marginLeft: pixelSizeHorizontal(6),
  },
});
