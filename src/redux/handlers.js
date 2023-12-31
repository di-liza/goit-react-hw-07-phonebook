import { toast } from 'react-toastify';

export const handlePanding = state => {
  state.isLoading = true;
};
export const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

// GET
export const handleGetContactsFullfiled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = payload;
};

// REMOVE
export const handleRemoveContactFullfiled = (state, { payload }) => {
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

// CREATE
export const handleCreateContactFullfiled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  toast.success(`"${payload.name}" successfully added to your contacts 🔥`);
  state.contacts.unshift(payload);
};
