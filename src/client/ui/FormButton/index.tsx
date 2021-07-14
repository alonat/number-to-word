import React from 'react';

import css from './FormButton.scss';

type StyleType = 'primary' | 'primaryOutlined';
type ButtonType = 'submit' | 'button' | 'reset';

interface FormButtonProps {
  type: ButtonType,
  styleType: StyleType,
  children: React.ReactNode,
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>
  isDisabled?: boolean,
}

const FormButton: React.FC<FormButtonProps> = ({
  type, isDisabled,
  children, styleType,
  onClickHandler,
}) => (
  <button
    className={`${css.button} ${css[`button__${styleType}`]}`}
    type={type}
    disabled={isDisabled}
    onClick={onClickHandler}
  >
    {children}
  </button>
);

export default FormButton;
