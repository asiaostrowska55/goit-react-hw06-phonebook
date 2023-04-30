import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors.js';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contactSlicer';

const filteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filterContact = filteredContacts(contacts, filter);
  const dispatch = useDispatch();

  const handledDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactsListBox}>
      <ul className={css.contactsList}>
        {filterContact &&
          filterContact.map(contact => (
            <div className={css.contactLi}>
              <span className={css.contact}>{contact.name}:</span>
              <span className={css.contact}>{contact.number}</span>
              <button
                type="button"
                className={css.btnDelete}
                onClick={handledDelete}
              >
                Delete
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default ContactsList;
