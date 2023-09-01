import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { addContact, deleteContact } from '../redux/contacts/contactsSlice';
import { changeFilter } from '../redux/filter/filterSlice';

import {
  getContacts,
  getFilteredContacts,
} from '../redux/contacts/contactsSelectors';

import styles from './App.module.css';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleAddContact = (name, number) => {
    if (isDublicate(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(name, number));
  };

  const isDublicate = name => {
    const normalizedName = name
      .toLowerCase()
      .split(' ')
      .filter(item => item)
      .join(' ');

    return contacts.some(item => normalizedName === item.name.toLowerCase());
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

  // const getFilteredContacts = () => {
  //   if (!filter) {
  //     return contacts;
  //   }

  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(
  //     item =>
  //       item.name.toLowerCase().includes(normalizedFilter) ||
  //       item.number.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const filteredContacts = getFilteredContacts();

  return (
    <div className={styles.phonebook}>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={handleAddContact} />

      <h2>Contacts</h2>
      <Filter handleFilter={handleFilter} />
      <ContactList items={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};
