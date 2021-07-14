import React from 'react';
import { Box, BoxWrapper } from '../ui/Box';
import FormComponent from './FormComponent';
import ListComponent from './List';

export default () => (
  <BoxWrapper>
    <Box>
      <FormComponent />
      <ListComponent />
    </Box>
  </BoxWrapper>
);
