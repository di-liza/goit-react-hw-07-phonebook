import { ContactForm, ContactList, Filter } from 'components';
import { Container } from './App.styled.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
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
