import { createSlice } from '@reduxjs/toolkit';
import { getContacts, removeContact, createContact } from './operations';
import { initialState } from './contactsInicialState';
import { toast } from 'react-toastify';

const handleGetContactsFullfiled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = payload;
};

const handlePanding = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const handleRemoveContactFullfiled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.splice(
    state.contacts.findIndex(contact => contact.id === payload.id),
    1
  );
  toast.info(`Contact "${payload.name}" deleted 👌`);
  state.isLoading = false;
  state.error = null;
};

const handleCreateContactFullfiled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  toast.success(`"${payload.name}" successfully added to your contacts 🔥`);
  state.contacts.unshift(payload);
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  //   addContact(state, action) {
  //     return (state = [action.payload, ...state]);
  //   },
  //   deleteContact(state, action) {
  //     return (state = state.filter(contact => contact.id !== action.payload));
  //   },
  // },
  extraReducers: builder => {
    // _______________GET_______________
    builder
      .addCase(getContacts.fulfilled, handleGetContactsFullfiled)
      .addCase(getContacts.pending, handlePanding)
      .addCase(getContacts.rejected, handleRejected);

    // _______________REMOVE_______________
    builder
      .addCase(removeContact.fulfilled, handleRemoveContactFullfiled)
      .addCase(removeContact.pending, handlePanding)
      .addCase(removeContact.rejected, handleRejected);
    // _______________CREATE_______________
    builder
      .addCase(createContact.fulfilled, handleCreateContactFullfiled)
      .addCase(createContact.pending, handlePanding)
      .addCase(createContact.rejected, handleRejected);
  },
});

// export const { deleteContact, addContact } = contactsSlice.actions;

export default contactsSlice.reducer;
