import css from './Filter.module.css';
import { filterContacts } from '../../redux/filterSlicer';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    const value = e.target.value.toLowerCase();
    dispatch(filterContacts(value));
  };
  return (
    <div className={css.filter}>
      <label htmlFor="filter">
        Filter contacts by name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={changeFilter}
          id="filter"
        />
      </label>
    </div>
  );
};

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { setFilter } from 'redux/filterSlicer';
// import { nanoid } from 'nanoid';
// import css from './Filter.module.css';

// const Filter = () => {
//   const dispatch = useDispatch();
//   const filterId = nanoid();

//   const handleChange = event => {
//     dispatch(setFilter(event.currentTarget.value));
//   };

//   return (
//     <div className={css.filter}>
//       <label htmlFor={filterId}>Find contacts by name</label>
//       <input
//         className={css.inputFilter}
//         id={filterId}
//         type="search"
//         onChange={event => handleChange(event)}
//       ></input>
//     </div>
//   );
// };

export default Filter;
