import React from 'react';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';
import { setFilter } from '../../redux/filterSlicer';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const filterId = nanoid();
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };
  return (
    <div>
      <p htmlFor={filterId} className={css.filter}>
        Find contacts by name
      </p>
      <input
        className={css.input}
        type="search"
        id={filterId}
        onChange={handleFilter}
      ></input>
    </div>
  );
};

export default Filter;
