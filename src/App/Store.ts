import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// Create a type for the root state
export type RootState = ReturnType<typeof store.getState>;

// Create a type for the AppDispatch
export type AppDispatch = typeof store.dispatch;

// Configure the Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Optional: If you want to enable TypeScript with middleware and other settings, you can add it like this:
// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Create a typed version of useDispatch and useSelector hooks
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
