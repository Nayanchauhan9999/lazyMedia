import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '@utils/responsiveDimensions';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  logoText: {
    fontSize: fontPixel(25),
    paddingVertical: pixelSizeVertical(10),
    fontWeight: '600',
    color: '#00000095',
  },
  header: {
    backgroundColor: '#00000010',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(20),
  },
  loginText: {
    fontSize: fontPixel(16),
    color: 'blue',
    fontWeight: '500',
    backgroundColor: '#0000FF10',
    padding: 5,
    borderRadius: 1000,
    paddingHorizontal: pixelSizeHorizontal(10),
  },
  flatlistWrapper: {
    paddingTop: pixelSizeVertical(40),
  },
  contentContainer: {
    gap: 20,
  },
  noDataView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyPostText: {
    fontSize: fontPixel(18),
    fontWeight: '500',
  },
});
