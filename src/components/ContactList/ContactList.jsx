import { useSelector } from 'react-redux';
import { getFilter } from 'redux/Filter/filterSlice';
import { getContact } from 'redux/ContactForm/contactSlice';
import { nanoid } from 'nanoid';
import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css';

function ContactList() {
  const filters = useSelector(getFilter);
  const contacts = useSelector(getContact);

  const contactsList = contacts.contacts;
  const normalizedFilter = filters.toLowerCase();
  const filteredContacts = contactsList.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <Contact key={nanoid()} contact={contact} />
      ))}
    </ul>
  );
}
export default ContactList;
