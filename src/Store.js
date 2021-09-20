// // WithOut CreatScilce function
// import { configureStore } from '@reduxjs/toolkit';
// import { createAction , createReducer } from '@reduxjs/toolkit';
// export const incrementAction = createAction('INCREMENT');
// export const decrementAction = createAction('DECREMENT');
// const counterReducer = createReducer(0, {
//     [incrementAction]: (state) => state + 1,
//     [decrementAction]: (state) => state - 1,
//    });
// const store = configureStore({
//     reducer: {
//       counter: counterReducer,
//     },
//   });
  
//   export default store;




//with createSlice Function and Thunk

import { createSlice, configureStore ,  createAsyncThunk} from '@reduxjs/toolkit';
export const fetchRandomNumber = createAsyncThunk(
    'numbers/fetchRandomNumber',
    async (data, thunkAPI) => {
      const response = await fetch('https://random-data-api.com/api/internet_stuff/random_internet_stuff');    
   return await response.json();
   
    }
  );
  export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {state.value += 1;},
    decrement: (state) => {state.value -= 1;}
  }, extraReducers: {
    [fetchRandomNumber.fulfilled]: (state, action) => {
        console.log(action.payload);
      state.value += action.payload.id;
    },
  }

});

export const { increment, decrement} = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
  });
  
  export default store;