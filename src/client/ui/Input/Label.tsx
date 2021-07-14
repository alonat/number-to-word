import React from 'react';

import style from './Label.scss';

interface InputLabelProps {
  text: string,
  fieldId: string
}

const InputLabel: React.FC<InputLabelProps> = ({ text, fieldId }) => (
  <label
    className={style.label}
    htmlFor={fieldId}
  >
    {text}
  </label>
);

export default InputLabel;
