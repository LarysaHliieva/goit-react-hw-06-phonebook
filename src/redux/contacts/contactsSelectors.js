export const getContacts = state => state.contacts;

export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(
    item =>
      item.name.toLowerCase().includes(normalizedFilter) ||
      item.number.toLowerCase().includes(normalizedFilter)
  );
};
