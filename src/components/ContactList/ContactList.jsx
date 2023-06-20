import { ListBox } from './ContactList.styled';
import { Contact } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFiter } from '../../redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';
import { selectIsLoading } from '../../redux';
import { Oval } from 'react-loader-spinner';

const loader = (
  <Oval
    height={80}
    width={80}
    color="#ffffff"
    wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor="#ffffff"
    strokeWidth={2}
    strokeWidthSecondary={2}
  />
);

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
        loader
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
