import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({ handleFilter }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        onChange={handleFilter}
        type="text"
        name="filter"
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
