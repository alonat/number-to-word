import React from 'react';

import css from './Wrapper.scss';

interface FieldWrapperProps {
  errorMessage?: string,
  children: React.ReactNode,
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({ children, errorMessage }) => (
  <div className={css.fieldWrapper}>
    {children}
    {errorMessage && (
      <p className={css.errorText}>
        {errorMessage}
      </p>
    )}
  </div>
);

export default FieldWrapper;
