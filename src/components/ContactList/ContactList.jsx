import { ListBox } from './ContactList.styled';
import { Contact } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFiter } from '../../redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  const filter = useSelector(selectFiter);

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
