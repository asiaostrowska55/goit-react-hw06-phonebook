import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors.js';
import { deleteContact } from 'redux/contactSlicer';

const ContactList = ({ storage }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContact = contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(filter.filter.toLowerCase()) ||
      contact.phone.includes(filter.filter)
    );
  });

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    localStorage.setItem(storage, JSON.stringify(contacts));
  };

  const listItem =
    filterContact === []
      ? ''
      : filterContact.map(item => {
          return (
            <li key={item.id} id={item.id} className={css.element}>
              {item.name}: {item.number}
              <button
                className={css.btn}
                onClick={() => handleDeleteContact(item.id)}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        });
  return <ul className={css.listItem}>{listItem}</ul>;
};

ContactList.propTypes = {
  listItem: PropTypes.array,
  handleDeleteContact: PropTypes.func,
};
export default ContactList;
