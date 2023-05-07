import { createReducer } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

export const addContacts = createAction('contact/addContacts');
export const deleteContacts = createAction('contact/deleteContacts');

const initialState = () => {
  const storedContacts = JSON.parse(localStorage.getItem('newContacts'));
  return storedContacts
    ? storedContacts
    : [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
};
export const contactsReducer = createReducer(initialState(), {
  [addContacts]: (state, action) => {
    state.push(action.payload);
    localStorage.setItem('newContacts', JSON.stringify(state));
  },
  [deleteContacts]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});
export default contactsReducer;
