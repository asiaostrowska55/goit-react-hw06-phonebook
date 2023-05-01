import { createReducer } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

export const filterContacts = createAction('contact/filterContact');

const initialState = '';
export const filterReducer = createReducer(initialState, {
  [filterContacts]: (state, action) => action.payload,
});

export default filterReducer;

// import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = {
//   filter: '',
// };

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: filterInitialState,
//   reducers: {
//     setFilter(action) {
//       return action.payload;
//     },
//   },
// });

// export const { setFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
