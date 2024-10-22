import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

// Define the shape of the counter state
interface CounterState {
  value: number;
  status: 'idle' | 'loading';
}

// Define the initial state using the CounterState interface
const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

// Create an async thunk for incrementing the counter
export const incrementAsync = createAsyncThunk<number, number>(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

// Create a slice of the state
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'idle'; // Handle rejected state
      });
  },
});

// Export the actions generated from the slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Define a selector to select the count value from the state
export const selectCount = (state: { counter: CounterState }): number => state.counter.value;

// Create a thunk to increment if the current value is odd
export const incrementIfOdd = (amount: number) => (dispatch: any, getState: () => { counter: CounterState }) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

// Export the reducer
export default counterSlice.reducer;
