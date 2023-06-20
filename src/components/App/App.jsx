import { useSelector } from 'react-redux';

import { ContactForm, ContactList, Filter, Notification } from 'components';
import { selectContacts } from '../../redux';
import { Container } from './App.styled.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const contacts = useSelector(selectContacts);

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Container>
  );
}
