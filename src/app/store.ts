import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from '../feaures/reservationSlice';
import customerReducer from '../feaures/customerSlice';

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customers: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
