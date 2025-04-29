/* eslint-disable react-hooks/exhaustive-deps */
import GlobalStyle from '@globalStyles';
import React, {useEffect, useRef} from 'react';
import {Animated, Keyboard, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {showToast} from '@redux/commonSlice';
import {RootState} from 'src/redux/store';
import {styles} from './styles';

const Toast = () => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const {toastMessage} = useSelector(({commonSlice}: RootState) => commonSlice);

  const fadeIn = () => {
    Keyboard.dismiss();
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (!finished) {
        return;
      }
      fadeOut();
    });
  };

  //after start animation it automatically remove after given timeout
  const fadeOut = () => {
    setTimeout(() => {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start(() => dispatch(showToast('')));
      //!change toast visible time
    }, 2500);
  };

  // Hooks
  useEffect(() => {
    toastMessage && fadeIn();
  }, [toastMessage]);

  return (
    toastMessage && (
      <Animated.View style={[styles.toastContainer, {opacity: fadeAnimation}]}>
        <Text
          style={[GlobalStyle.caption_16_Poppins_Medium, styles.toastMessage]}>
          {toastMessage}
        </Text>
      </Animated.View>
    )
  );
};

export default Toast;
