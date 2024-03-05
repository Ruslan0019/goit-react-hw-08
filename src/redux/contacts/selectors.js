import { createSelector } from "reselect";

export const selectContacts = (state) => state.contacts.contacts;
export const selectFilter = (state) => state.filter.name.toLowerCase();

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {
  return contacts.filter((contact) => contact.name.toLowerCase().includes(filter));
});
