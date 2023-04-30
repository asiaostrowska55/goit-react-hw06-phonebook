import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from 'redux/contactSlicer';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContact = contacts.filter(contact => {
    const name = contact.name.toLowerCase();
    const phone = contact.phone;

    const filterText = filter?.filter?.toLowerCase() ?? '';

    return name.includes(filterText) || phone.includes(filterText);
  });

  if (filterContact.length === null) {
    return <p>No contacts found</p>;
  }

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
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
