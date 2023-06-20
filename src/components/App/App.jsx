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
      <h2 className="phoneBookTitle">PhoneBook</h2>
      <div className="form-wrapper">
        <h3 className="title">Create a New Contact</h3>

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
