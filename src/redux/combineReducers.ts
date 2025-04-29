import {combineReducers} from 'redux';

import commonSlice from '@redux/commonSlice';
import userInfoSlice from '@redux/userInfoSlice';

const rootReducer = combineReducers({
  commonSlice: commonSlice,
  userInfo: userInfoSlice,
});

export default rootReducer;
