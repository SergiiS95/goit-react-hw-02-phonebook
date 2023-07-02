import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, handleFilter }) => {
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilter: PropTypes.func,
};
