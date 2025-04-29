import {
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '@utils/responsiveDimensions';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: 'blue',
    borderRadius: 10000,
    shadowColor: '#00000050',
    shadowOpacity: 1,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowRadius: 1,
    alignSelf: 'center',
    position: 'absolute',
    bottom: pixelSizeVertical(50),
    elevation: 10,
    marginHorizontal: pixelSizeHorizontal(25),
    zIndex: 100000,
  },
  toastMessage: {
    paddingVertical: pixelSizeVertical(10),
    textAlign: 'center',
    paddingHorizontal: pixelSizeHorizontal(15),
    color: 'white',
  },
});
