import { nanoid } from 'nanoid';
import { Form } from './ContactForm.styled';
// import { addContact } from 'redux/constactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsSelector } from '../../redux';

export function ContactForm() {
  const contacts = useSelector(getContactsSelector);
  const dispatch = useDispatch();

  const handleContactFormSubmit = e => {
    e.preventDefault();

    const newContact = {
      name: e.currentTarget.elements.name.value,
      id: nanoid(),
      number: e.currentTarget.elements.number.value,
    };

    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isContactExists) {
      return alert(`${newContact.name} is already in contacts`);
    }

    // dispatch(addContact(newContact));
    e.currentTarget.reset();
  };

  return (
    <>
      <Form onSubmit={handleContactFormSubmit}>
        <div className="input-wrapper">
          <div>
            <label className="styled-label" htmlFor="name">
              Name
            </label>
            <input
              className="styled-input"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Enter name"
              required
            />
          </div>
          <div>
            <label className="styled-label" htmlFor="number">
              Number
            </label>
            <input
              className="styled-input"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="Enter phone number"
              required
            />
          </div>
        </div>
        <button className="addBtn" type="submit">
          Add contact
        </button>
      </Form>
    </>
  );
}
