import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '@utils/responsiveDimensions';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: '#00000070',
  },
  contentContainer: {
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: pixelSizeHorizontal(30),
    borderColor: '#FFFFFF20',
    borderTopWidth: 1,
  },
  image: {
    height: heightPixel(48),
    width: heightPixel(48),
    resizeMode: 'contain',
  },
  deleteAccountImage: {
    height: heightPixel(56),
    width: widthPixel(56),
    position: 'absolute',
    alignSelf: 'center',
    top: heightPixel(-28),
  },
  areYouSureText: {
    textAlign: 'center',
    fontSize: fontPixel(14),
  },
  highlightedText: {
    textAlign: 'center',
    fontSize: fontPixel(16),
  },
  modalCloseButton: {
    alignSelf: 'center',
    padding: pixelSizeHorizontal(10),
    borderRadius: 100,
    height: heightPixel(60),
    width: heightPixel(60),
    marginBottom: pixelSizeVertical(10),
  },
  buttonsWrapper: {
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {},
  cancelButtonStyles: {
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  cancelButtonWrapper: {
    alignSelf: 'center',
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(10),
    borderWidth: 1,
    borderRadius: 8,
  },

  keyboardAvoidingViewStyles: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'flex-end',
  },
  modalStretcher: {
    height: heightPixel(4),
    width: widthPixel(85),
    borderRadius: 50,
    position: 'absolute',
    marginTop: pixelSizeVertical(10),
    alignSelf: 'center',
  },
});
