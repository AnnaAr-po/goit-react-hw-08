import { createSelector } from "@reduxjs/toolkit";


export const selectContacts = (state) => state.contacts.items;


export const selectNameFilter = (state) => state.filters.name;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    console.log("All contacts:", contacts);
    console.log("Filter value:", nameFilter);

    if (!Array.isArray(contacts)) return [];

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);