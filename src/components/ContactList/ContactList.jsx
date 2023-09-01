import PropTypes from 'prop-types';

import Button from 'components/Button/Button';

import styles from './ContactList.module.css';

const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(({ id, name, number }) => (
        <li key={id} className={styles.contact}>
          {name}: {number}
          <Button
            text="Delete"
            type="button"
            onClick={() => onDelete(id)}
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

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
