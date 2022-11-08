import { configureStore } from '@reduxjs/toolkit'
import { menuReducer, imageReducer } from './reducers/menuReducer' ;
import orderReducer from './reducers/orderReducer' ;

export default configureStore({
    reducer: {
        menuReducer, orderReducer, imageReducer
    },
});