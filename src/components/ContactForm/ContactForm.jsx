import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
import { addContacts } from 'redux/contactSlicer';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const contact = {
      name: form.name.value,
      number: form.number.value,
      id: nanoid(),
    };

    let isContact;
    contacts.forEach(person => {
      if (contact.name.toLowerCase() === person.name.toLowerCase()) {
        isContact = true;
      }
    });
    isContact
      ? alert(`${contact.name} is already in contacts!`)
      : dispatch(addContacts(contact));

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
          pattern="^[a-zA-Zа-яА-Я\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\u00D3\u00F3\u015A\u015B\u0179\u017A\u017B\u017C]+(([' \-][a-zA-Zа-яА-Я \u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\u00D3\u00F3\u015A\u015B\u0179\u017A\u017B\u017C])?[a-zA-Zа-яА-Я \u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\u00D3\u00F3\u015A\u015B\u0179\u017A\u017B\u017C]*)*$"
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
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
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
