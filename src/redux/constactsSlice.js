import { createSlice } from '@reduxjs/toolkit';
import { getContacts, removeContact, createContact } from './operations';
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
      .addCase(createContact.fulfilled, handleCreateContactFullfiled)
      .addCase(removeContact.fulfilled, handleRemoveContactFullfiled)
      .addMatcher(action => {
        console.log(action.type.endsWith('/pending'));
        action.type.endsWith('/pending');
      }, handlePanding)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export default contactsSlice.reducer;
