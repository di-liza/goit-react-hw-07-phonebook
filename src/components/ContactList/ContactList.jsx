import { ListBox } from './ContactList.styled';
import { Contact } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsSelector } from '../../redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsSelector);
  console.log('contacts:', contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  // const filter = useSelector(getFilterSelector);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <>
      <ListBox>
        <ul>
          {contacts.length !== 0 &&
            contacts.map(contact => {
              return <Contact key={contact.id} contact={contact} />;
            })}
        </ul>
      </ListBox>
    </>
  );
}
