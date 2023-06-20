import { createSlice } from '@reduxjs/toolkit';
import { getContacts, removeContact, createContact } from './operations';

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
    // _______________GET_______________
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = payload;
    },
    [getContacts.pending]: state => {
      state.isLoading = true;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    // _______________REMOVE_______________
    [removeContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.splice(
        state.contacts.findIndex(contact => contact.id === payload.id),
        1
      );
      state.isLoading = false;
      state.error = null;
    },
    [removeContact.pending]: state => {
      state.isLoading = true;
    },
    [removeContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    // _______________CREATE_______________

    [createContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(payload);
    },
    [createContact.pending]: state => {
      state.isLoading = true;
    },
    [createContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

// export const { deleteContact, addContact } = contactsSlice.actions;

export default contactsSlice.reducer;
