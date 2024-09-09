import { createSlice } from '@reduxjs/toolkit';

// Fix the typo here from initiaState to initialState
const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState, // Correct usage of initialState
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    IncrementByIdAmount: (state, action) => {
      // Fix the typo start.count to state.count
      state.count += action.payload;
    },
  },
});

// Export the actions you want to use
export const { increment, decrement, reset, IncrementByIdAmount } = counterSlice.actions;

// Fix export to reducer (not reducers)
export default counterSlice.reducer;
