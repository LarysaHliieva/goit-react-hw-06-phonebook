import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/Button/Button';

import { deleteContact } from '../../redux/contacts/contactsSlice';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';

import styles from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contact}>
          {name}: {number}
          <Button
            text="Delete"
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            className={styles.contact__btn}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.defaultProps = {
  items: [],
};
