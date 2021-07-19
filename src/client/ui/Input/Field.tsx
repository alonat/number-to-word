import React, { useCallback } from 'react';

import style from './Field.scss';

type FieldType = 'text' | 'number' | 'checkbox' | 'email';

interface FieldProps {
  type: FieldType,
  id: string,
  placeholder?: string,
  value?: string,
  isError?: boolean,
  onInputChange: (e: string) => void,
}

const Field: React.FC<FieldProps> = ({
  type, id,
  placeholder,
  value, isError,
  onInputChange,
}) => {
  const handleChange = useCallback((e) => {
    onInputChange(e.target.value.trim());
  }, [onInputChange]);

  return (
    <input
      className={`${style.input} ${isError ? style.input__error : ''}`}
      type={type}
      id={id}
      data-testid={id}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Field;
