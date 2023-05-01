import { createReducer } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

export const addContacts = createAction('contact/addContacts');
export const deleteContacts = createAction('contact/deleteContacts');

const initialState = () => {
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};
export const contactsReducer = createReducer(initialState(), {
  [addContacts]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContacts]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});
export default contactsReducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const STORAGE_KEY = 'newContacts';
// const contactsInitialState = JSON.parse(localStorage.getItem(STORAGE_KEY));

// export const setLocalStorage = contacts => {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
// };

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//         setLocalStorage([...state]);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             id: nanoid(),
//             name: text.name,
//             number: text.number,
//           },
//         };
//       },
//     },
//     deleteContact: {
//       reducer(state, action) {
//         const index = state.findIndex(contact => contact.id === action.payload);
//         state.splice(index, 1);
//         setLocalStorage([...state]);
//       },
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
