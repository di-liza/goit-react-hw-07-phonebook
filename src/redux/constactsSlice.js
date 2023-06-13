import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      return (state = [action.payload, ...state]);
    },
    deleteContact(state, action) {
      return (state = state.filter(contact => contact.id !== action.payload));
    },
  },
});

export const { deleteContact, addContact } = contactsSlice.actions;
