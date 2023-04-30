import { createSlice } from '@reduxjs/toolkit';

const localStorageContacts = JSON.parse(localStorage.getItem('contact'));

const contactSlice = createSlice({
  name: 'contacts',
  initialState: localStorageContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: contact.id,
            name: contact.name,
            phone: contact.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
    loadContacts(state, action) {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

export const { addContact, deleteContact, loadContacts } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
