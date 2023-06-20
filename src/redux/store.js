import { configureStore } from '@reduxjs/toolkit';
// combineReducers from '@reduxjs/toolkit'

// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import contactsSlice from './constactsSlice';
import filterSlice from './filterSlice';

console.log('contactsSlice:', contactsSlice);
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const rootReducer = combineReducers({
//   contacts: contactsSlice.reducer,
//   filter: filterSlice.reducer,
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };
// export const persistedContacts = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
  },
  // reducer: persistedContacts,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
});

// export const persistor = persistStore(store);
