import { useSelector } from 'react-redux';

import { ContactForm, ContactList, Filter, Notification } from 'components';
import { getContactsSelector } from '../../redux';
import { Container } from './App.styled.js';

export function App() {
  const contacts = useSelector(getContactsSelector);

  return (
    <Container>
      <div className="form-wrapper">
        <h2 className="title">PhoneBook</h2>
        <ContactForm />
      </div>

      <div className="contactsWrapper">
        <h1 className="title">Contacts</h1>
        <div>
          <Filter />
          <ContactList />
          {contacts.length === 0 && (
            <Notification text={'No contacts are available.'} />
          )}
        </div>
      </div>
    </Container>
  );
}
