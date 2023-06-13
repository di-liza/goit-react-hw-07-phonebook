import PropTypes from 'prop-types';

export function Notification({ text }) {
  return <p>{text}</p>;
}

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
