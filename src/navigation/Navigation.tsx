/* eslint-disable react-hooks/exhaustive-deps */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CreatePost, Home, Login} from '@screens';
import React, {useEffect, useState} from 'react';
import {Loader, Toast} from '@components';
import {addEventListener} from '@react-native-community/netinfo';
import {AsyncKey, getData} from '@utils/constant/asyncStore';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@redux/store';
import {setIsLogin} from '@redux/userInfoSlice';
import Register from 'src/screens/Register';
import {ActivityIndicator, StatusBar} from 'react-native';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  CreatePost: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function ScreenNavigation() {
  const [isNetworkAvailable, setIsNetworkAvailable] = useState(true);
  const {isLogin} = useSelector((state: RootState) => state.userInfo);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    init();
  }, [isNetworkAvailable]);

  async function init() {
    try {
      const isUserLogin = await getData<string>(AsyncKey.ISLOGIN);
      isUserLogin ? dispatch(setIsLogin(true)) : dispatch(setIsLogin(false));
    } catch (error) {
      console.log('ERROR:: ', error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      if (state.isConnected) {
        setIsNetworkAvailable(true);
      } else {
        setIsNetworkAvailable(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      <Toast />
      <Loader />
      <StatusBar barStyle={'dark-content'} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Stack.Navigator
          initialRouteName={isLogin ? 'Home' : 'Login'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register" component={Register} />
            {isLogin && (
              <Stack.Screen name="CreatePost" component={CreatePost} />
            )}
          </Stack.Group>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
