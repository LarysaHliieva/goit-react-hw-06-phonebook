import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/Button/Button';

import { addContact } from '../../redux/contacts/contactsSlice';
import { getContacts } from '../../redux/contacts/contactsSelectors';

import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (isDublicate(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(name, number));

    resetForm();
  };

  const isDublicate = name => {
    const normalizedName = name
      .toLowerCase()
      .split(' ')
      .filter(item => item)
      .join(' ');

    return contacts.some(item => normalizedName === item.name.toLowerCase());
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          onChange={({ target }) => setName(target.value)}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          onChange={({ target }) => setNumber(target.value)}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <Button text="Add contact" />
    </form>
  );
};

export default ContactForm;
