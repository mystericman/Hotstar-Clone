import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import movieReducer from '../features/movie/movieSlice';
import favSlice from '../features/cart/favSlice';

export default configureStore ({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        fav: favSlice
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

