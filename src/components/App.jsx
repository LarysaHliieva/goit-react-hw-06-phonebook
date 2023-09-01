import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import styles from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (isDublicate(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const isDublicate = name => {
    const normalizedName = name
      .toLowerCase()
      .split(' ')
      .filter(item => item)
      .join(' ');

    return contacts.some(item => normalizedName === item.name.toLowerCase());
  };

  const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(item => item.id !== id));
  };

  const handleFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const getFilteredContacts = () => {
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

  const filteredContacts = getFilteredContacts();

  return (
    <div className={styles.phonebook}>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter handleFilter={handleFilter} />
      <ContactList items={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};
