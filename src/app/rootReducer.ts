import { combineReducers } from '@reduxjs/toolkit';
import orderBookReducer from '../features/order-book/orderBookSlice';

export const rootReducer = combineReducers({
  orderBook: orderBookReducer,
});
