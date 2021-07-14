import React, { useState } from 'react';

import css from './FormComponent.scss';
import InputLabel from '../../ui/Input/Label';
import Field from '../../ui/Input/Field';
import FieldWrapper from '../../ui/Input/Wrapper';

const FormComponent: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <form action="/" className={css.formComponent}>
      <FieldWrapper>
        <InputLabel fieldId="email" text="What are you looking for?" />
        <Field
          id="query"
          type="text"
          placeholder="Enter numbers"
          value={query}
          onInputChange={setQuery}
        />
      </FieldWrapper>
    </form>
  );
};

export default FormComponent;
