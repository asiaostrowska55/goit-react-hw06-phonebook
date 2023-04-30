import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { getContacts } from 'redux/selectors';
import { addContact } from '../../redux/contactSlicer';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // const handleChange = e => {
  //   e.currentTarget.name === 'name'
  //     ? setName(e.currentTarget.value)
  //     : setNumber(e.currentTarget.value);
  // };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const contact = {
      name: form.name.value,
      number: form.number.value,
    };

    let isContact;
    contacts.forEach(newContact => {
      if (newContact.name.toLowerCase() === contact.name.toLowerCase()) {
        isContact = true;
        return;
      }
    });

    isContact
      ? alert(`${contact.name} is already in contacts!`)
      : dispatch(addContact(contact));

    form.reset();
  };

  const numberId = nanoid();
  const nameId = nanoid();

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          Name
        </label>
        <input
          className={css.input}
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label} htmlFor={numberId}>
          Number
        </label>
        <input
          className={css.input}
          id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
