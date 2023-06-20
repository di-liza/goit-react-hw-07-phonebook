import { createSlice } from '@reduxjs/toolkit';
import { getContacts, deleteContact, addContact } from './operations';
import { initialState } from './inicialState';
import {
  handleGetContactsFullfiled,
  handleCreateContactFullfiled,
  handleRemoveContactFullfiled,
  handlePanding,
  handleRejected,
} from './handlers';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, handleGetContactsFullfiled)
      .addCase(addContact.fulfilled, handleCreateContactFullfiled)
      .addCase(deleteContact.fulfilled, handleRemoveContactFullfiled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePanding)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export default contactsSlice.reducer;
