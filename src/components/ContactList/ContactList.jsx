import { ListBox } from './ContactList.styled';
import { Contact } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFiter } from '../../redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';
import { selectIsLoading } from '../../redux';

import { Loader } from 'components';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  const filter = useSelector(selectFiter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading ? (
        <Loader height={80} width={80} />
      ) : (
        <ListBox>
          <ul>
            {filteredContacts.length !== 0 &&
              filteredContacts.map(contact => {
                return <Contact key={contact.id} contact={contact} />;
              })}
          </ul>
        </ListBox>
      )}
    </>
  );
}
