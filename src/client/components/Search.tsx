import React, { useContext } from 'react';
import { Box, BoxWrapper } from '../ui/Box';
import FormComponent from './FormComponent';
import ListComponent from './List';

import AppContext from '../provider';
import { getWordsListByHash } from '../api';
import { useThrottledEffect } from '../utils';
import Loader from '../ui/Loader';

export default () => {
  const {
    hash, setWordsList, setLoading, isLoading,
  } = useContext(AppContext);

  const updateList = (hashForSearch: string) => {
    setLoading(true);
    getWordsListByHash(hashForSearch).then((list) => {
      setWordsList(list);
      setLoading(false);
    });
  };

  useThrottledEffect(() => {
    if (hash === '') return setWordsList([]);

    return updateList(hash);
  }, 1000, [hash]);

  return (
    <BoxWrapper>
      <Box>
        <FormComponent />
        {isLoading ? <Loader /> : <ListComponent />}
      </Box>
    </BoxWrapper>
  );
};
