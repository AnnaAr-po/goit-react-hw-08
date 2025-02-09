import { createSelector } from "@reduxjs/toolkit";

// Отримуємо всі контакти зі стейту
export const selectContacts = (state) => state.contacts.items;

// Отримуємо значення фільтра зі стейту
export const selectNameFilter = (state) => state.filters.name;

// Фільтруємо контакти за іменем
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);