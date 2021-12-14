import React from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';

const Button = ({className, outline, onClick, children}) => {
  return (
    <div>
      <button onClick={onClick} href="/cart.html" className={classNames('button', className, {
        'button--outline': outline,
      })}>
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button;
