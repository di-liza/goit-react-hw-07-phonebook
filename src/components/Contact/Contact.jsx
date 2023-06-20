import PropTypes from 'prop-types';

import { Item } from './Contact.styled';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/operations';

export function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <Item>
      <div>
        <p>{contact.name}</p>
        <p>{contact.phone}</p>
      </div>
      <button
        className="delete-btn"
        type="button"
        onClick={() => {
          dispatch(removeContact(contact.id));
        }}
      >
        <DeleteIcon width={20} height={20} />
      </button>
    </Item>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
