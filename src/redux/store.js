import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contactsSlice/contactsSlice';
import filterReducer from './filterSlice/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
