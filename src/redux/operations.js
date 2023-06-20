import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://649095021e6aa71680cb85c3.mockapi.io';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  }
);
