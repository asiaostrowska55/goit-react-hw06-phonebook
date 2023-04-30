import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlicer';
import { filterReducer } from './filterSlicer';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
