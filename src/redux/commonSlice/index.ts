import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export const CommonSlice = createSlice({
  name: 'CommonSlice',
  initialState: {
    isLoading: false,
    errorMessage: '' as string,
    isErrorModalVisible: false,
    toastMessage: '',
  },
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setErrorMessage(state, action: PayloadAction<string | undefined>) {
      if (action.payload) {
        state.errorMessage = action.payload;
      }
    },
    setIsErrorModalVisible(state, action: PayloadAction<boolean>) {
      state.isErrorModalVisible = action.payload;
    },
    showToast(state, action: PayloadAction<string>) {
      state.toastMessage = action.payload;
    },
  },
});

export const {
  setIsLoading,
  setIsErrorModalVisible,
  setErrorMessage,
  showToast,
} = CommonSlice.actions;

export default CommonSlice.reducer;
