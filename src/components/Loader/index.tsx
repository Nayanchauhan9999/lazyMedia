import React from 'react';
import {View} from 'react-native';

import {useSelector} from 'react-redux';

import Images from '@assets';
import GlobalStyle from '@globalStyles';
import LottieView from 'lottie-react-native';
import {RootState} from 'src/redux/store';
import {styles} from './styles';

const Loader: React.FC = () => {
  //Hooks
  const {isLoading} = useSelector((state: RootState) => state.commonSlice);
  return (
    isLoading && (
      <View
        style={[GlobalStyle.flex, GlobalStyle.alignmentCenter, styles.view]}>
        <LottieView
          source={Images.lottie.Loader}
          style={styles.lottieFile}
          autoPlay
          loop
        />
      </View>
    )
  );
};

export default Loader;
