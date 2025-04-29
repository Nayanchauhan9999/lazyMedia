import {StyleSheet} from 'react-native';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from 'src/utils/responsiveDimensions';

const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  alignmentCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignmentSpaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  caption_16_Poppins_Medium: {
    fontSize: fontPixel(16),
  },
  text20Medium: {
    fontSize: fontPixel(20),
  },
  MV5: {
    marginVertical: pixelSizeVertical(5),
  },
  MV10: {
    marginVertical: pixelSizeVertical(10),
  },
  MV15: {
    marginVertical: pixelSizeVertical(15),
  },
  MV20: {
    marginVertical: pixelSizeVertical(20),
  },
  MV25: {
    marginVertical: pixelSizeVertical(25),
  },
  MV30: {
    marginVertical: pixelSizeVertical(30),
  },
  MH5: {
    marginHorizontal: pixelSizeHorizontal(5),
  },
  MH10: {
    marginHorizontal: pixelSizeHorizontal(10),
  },
  MH14: {
    marginHorizontal: pixelSizeHorizontal(14),
  },
  MH20: {
    marginHorizontal: pixelSizeHorizontal(20),
  },
  PV5: {
    paddingVertical: pixelSizeVertical(5),
  },
  PV10: {
    paddingVertical: pixelSizeVertical(10),
  },
  PV20: {
    paddingVertical: pixelSizeVertical(20),
  },
  PV15: {
    paddingVertical: pixelSizeVertical(15),
  },
  PV40: {
    paddingVertical: pixelSizeVertical(40),
  },
  PV30: {
    paddingVertical: pixelSizeVertical(30),
  },
  PH5: {
    paddingHorizontal: pixelSizeVertical(5),
  },
  PH10: {
    paddingHorizontal: pixelSizeVertical(10),
  },
  PH15: {
    paddingHorizontal: pixelSizeVertical(15),
  },
  PH20: {
    paddingHorizontal: pixelSizeVertical(20),
  },
  PH25: {
    paddingHorizontal: pixelSizeVertical(25),
  },
  mv50: {
    marginVertical: pixelSizeVertical(50),
  },

  mt50: {
    marginTop: heightPixel(50),
  },
  mt30: {
    marginTop: heightPixel(30),
  },
  mt40: {
    marginTop: heightPixel(40),
  },
  mb30: {
    marginBottom: heightPixel(30),
  },
  mb20: {
    marginBottom: heightPixel(20),
  },
  mb15: {
    marginBottom: heightPixel(15),
  },
  mb10: {
    marginBottom: heightPixel(10),
  },
  mt20: {
    marginTop: heightPixel(20),
  },
  mt10: {
    marginTop: heightPixel(10),
  },
  PB50: {
    paddingBottom: heightPixel(50),
  },
  PB25: {
    paddingBottom: heightPixel(25),
  },
  PB10: {
    paddingBottom: heightPixel(10),
  },
  PB5: {
    paddingBottom: pixelSizeVertical(5),
  },
  PT10: {
    paddingTop: heightPixel(10),
  },
  PT20: {
    paddingTop: heightPixel(20),
  },
  PT40: {
    paddingTop: heightPixel(40),
  },
  absoluteRight0: {
    position: 'absolute',
    right: 0,
    zIndex: 1,
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  width50: {
    width: '50%',
  },
  zIndex1: {
    zIndex: 1,
  },
  zIndex2: {
    zIndex: 2,
  },
  gap10: {
    gap: 10,
  },
});

export default GlobalStyle;
