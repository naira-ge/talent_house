import { configureStore } from '@reduxjs/toolkit';
import { loginToHomepage } from '../components/titlePageComponents/reducer/login';
import { popupHandler } from '../components/titlePageComponents/reducer/popupHandler';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    popupHandler: popupHandler,
    loginToHomepage: loginToHomepage,
  },
});
