import { createSlice } from '@reduxjs/toolkit';
import { getContacts, removeContact } from './operations';

// fetch('https://649095021e6aa71680cb85c3.mockapi.io/contacts')
//   .then(res => res.json())
//   .then(console.log);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   addContact(state, action) {
  //     return (state = [action.payload, ...state]);
  //   },
  //   deleteContact(state, action) {
  //     return (state = state.filter(contact => contact.id !== action.payload));
  //   },
  // },
  extraReducers: {
    [getContacts.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
    },
    [getContacts.pending]: state => {
      state.isLoading = true;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    // ____________________-
    [removeContact.fulfilled]: (state, { payload }) => {
      state.contacts.splice(
        state.contacts.findIndex(contact => contact.id === payload.id),
        1
      );
    },
    [removeContact.pending]: state => {
      state.isLoading = true;
    },
    [removeContact.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

// export const { deleteContact, addContact } = contactsSlice.actions;

export default contactsSlice.reducer;
