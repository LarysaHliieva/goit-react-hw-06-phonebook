import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({ hangleFilter }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        onChange={hangleFilter}
        type="text"
        name="filter"
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  hangleFilter: PropTypes.func.isRequired,
};
