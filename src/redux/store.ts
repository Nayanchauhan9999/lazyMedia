import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '@redux/combineReducers';

export default configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
