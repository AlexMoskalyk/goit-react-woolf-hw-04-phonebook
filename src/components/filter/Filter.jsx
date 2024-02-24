import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, handleFilter }) => {
  return (
    <fieldset className={css.filter}>
      <legend className={css.legend}>Quickly find the right contact</legend>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={value}
          onChange={handleFilter}
        />
      </label>
    </fieldset>
  );
};

export default Filter;
