import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Button.module.css';

const Button = ({ text, type = 'submit', onClick, className }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(styles.btn, className)}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};
