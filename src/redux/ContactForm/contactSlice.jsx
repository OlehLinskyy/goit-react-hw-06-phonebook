import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactkInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactFormSlice = createSlice({
  name: 'contacts',
  initialState: contactkInitialState,
  reducers: {
    addContact(state, action) {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(({ id }) => id !== action.payload),
      };
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};
export const persistedContactReducer = persistReducer(
  persistConfig,
  contactFormSlice.reducer
);

export const { addContact, deleteContact } = contactFormSlice.actions;
export const getContact = state => state.contacts;
export const contactsReduser = contactFormSlice.reducer;
