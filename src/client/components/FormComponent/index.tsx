import React, { useContext } from 'react';

import css from './FormComponent.scss';
import InputLabel from '../../ui/Input/Label';
import Field from '../../ui/Input/Field';
import FieldWrapper from '../../ui/Input/Wrapper';
import AppContext from '../../provider';

const FormComponent: React.FC = () => {
  const { hash, setHash } = useContext(AppContext);

  return (
    <form action="/" className={css.formComponent} data-testid="form-component">
      <FieldWrapper>
        <InputLabel fieldId="query" text="What are you looking for?" />
        <Field
          id="query"
          type="text"
          placeholder="Enter numbers"
          value={hash}
          onInputChange={setHash}
        />
      </FieldWrapper>
    </form>
  );
};

export default FormComponent;
