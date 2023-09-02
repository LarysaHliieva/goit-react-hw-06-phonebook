import { useDispatch } from 'react-redux';

import { changeFilter } from '../../redux/filter/filterSlice';

import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

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
