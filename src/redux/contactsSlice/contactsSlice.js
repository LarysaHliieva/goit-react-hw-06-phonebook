import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact: (state, { payload }) => {
      state.filter(item => item.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
