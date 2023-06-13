import { ListBox } from './ContactList.styled';
import { Contact } from 'components';
import { useSelector } from 'react-redux';
import { getFilterSelector, getContactsSelector } from '../../redux';

export function ContactList() {
  const contacts = useSelector(getContactsSelector);
  const filter = useSelector(getFilterSelector);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ListBox>
        <ul>
          {filteredContacts.length !== 0 &&
            filteredContacts.map(contact => {
              return <Contact key={contact.id} contact={contact} />;
            })}
        </ul>
      </ListBox>
    </>
  );
}
