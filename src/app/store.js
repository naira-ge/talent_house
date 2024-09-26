import { configureStore } from '@reduxjs/toolkit';
import { loginToHomepage } from '../components/titlePageComponents/reducer/login';
import { popupHandler } from '../components/titlePageComponents/reducer/popupHandler';
import { jobsCompanyReducer } from '../_reducers/jobCompanyReducer';
import {usersReducer} from '../_reducers/userReducer'
//import { postsReducer } from '../_reducers/postsReducer';
//import jobsReducer from '../features/jobsSlice'
import postsReducer from '../features/posts/postsSlice';
import userReducer from '../features/users/usersSlice'


 const store = configureStore({
  reducer: {
    popupHandler: popupHandler,
    loginToHomepage: loginToHomepage,
    jobs: jobsCompanyReducer,
    users: usersReducer,
    user: userReducer,
    posts: postsReducer,
  },
});

export default store;



