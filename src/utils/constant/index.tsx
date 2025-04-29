import {
  UseInfiniteQueryResult,
  UseMutationResult,
  UseQueryResult,
} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {Alert, Platform} from 'react-native';
import ErrorCode from 'src/apiService/errorCode';
import {
  setErrorMessage,
  setIsErrorModalVisible,
  setIsLoading,
  showToast,
} from '@redux/commonSlice';
import {ErrorResBody, ICommonResponse} from '@types';
import store from '@redux/store';
import moment from 'moment';

export const handleMutation = (
  mutationRes: UseMutationResult<
    AxiosResponse<ICommonResponse, any>,
    AxiosError<ErrorResBody, any>,
    any,
    unknown
  >,
) => {
  store.dispatch(setIsLoading(mutationRes.isPending));
  if (mutationRes.isError) {
    if (
      mutationRes.error.code === ErrorCode.ERR_NETWORK &&
      mutationRes.error.isAxiosError
    ) {
      store.dispatch(showToast('pleaseTryAgain'));
      return;
    }
    store.dispatch(setIsErrorModalVisible(true));
    store.dispatch(
      setErrorMessage(mutationRes?.error?.response?.data?.message),
    );
  }
  if (mutationRes?.isSuccess) {
    store.dispatch(showToast(mutationRes?.data?.data?.message));
  }
};

export const handleQuery = (
  queryResponse: UseQueryResult<
    AxiosResponse<ICommonResponse, any>,
    AxiosError<ErrorResBody, any>
  >,
) => {
  store.dispatch(
    setIsLoading(queryResponse.isLoading || queryResponse.isRefetching),
  );
  if (queryResponse.isError) {
    if (
      queryResponse.error.code === ErrorCode.ERR_NETWORK &&
      queryResponse.error.isAxiosError
    ) {
      Alert.alert('error', 'requestTimeOut', [
        {
          onPress: () => {
            queryResponse.refetch();
            store.dispatch(showToast('retrying'));
          },
          text: 'retry',
        },
      ]);
      return;
    }
    store.dispatch(setIsErrorModalVisible(true));
    if (typeof queryResponse?.error?.response?.data?.message === 'string') {
      store.dispatch(
        setErrorMessage(queryResponse?.error?.response?.data?.message),
      );
    } else {
      store.dispatch(
        setErrorMessage(queryResponse?.error?.response?.data?.message),
      );
    }
    store.dispatch(setIsLoading(false));
  }
  if (queryResponse?.isSuccess) {
    store.dispatch(setIsLoading(false));
  }
};

export const handleInfiniteQuery = (
  queryResponse: UseInfiniteQueryResult<
    AxiosResponse<ICommonResponse, any>,
    AxiosError<ErrorResBody, any>
  >,
) => {
  store.dispatch(setIsLoading(queryResponse.isPending));

  if (queryResponse.isError) {
    // if request time out then show alert and refetch
    if (
      queryResponse.error.code === 'ERR_NETWORK' &&
      queryResponse.error.isAxiosError
    ) {
      Alert.alert('Error', 'Request Time out', [
        {
          onPress: () => {
            queryResponse.refetch();
            store.dispatch(showToast('Retrying....'));
          },
          text: 'retry',
        },
      ]);
      return;
    }

    store.dispatch(setIsErrorModalVisible(true));
    if (typeof queryResponse?.error?.response?.data?.message === 'string') {
      store.dispatch(
        setErrorMessage(queryResponse?.error?.response?.data?.message),
      );
    } else {
      store.dispatch(
        setErrorMessage(queryResponse?.error?.response?.data?.message),
      );
    }
  }
  if (queryResponse?.isSuccess) {
    // ? remove toast message because of Quality Assurance feedback.
    // dispatch(showToastAlert(queryResponse?.data?.data?.message));
  }
};

export const isMMDDYYYY = (date: moment.MomentInput) => {
  return moment(date).format('MM/DD/YYYY');
};

export const isDDMMYYYY = (date: moment.MomentInput) => {
  return moment(date).format('DD/MM/YYYY');
};

export const getLocalImagePath = (imgPath: string): string => {
  if (Platform.OS === 'ios') {
    return 'file://' + imgPath;
  } else {
    return imgPath;
  }
};
