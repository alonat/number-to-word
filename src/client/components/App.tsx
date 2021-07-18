import React, { useState } from 'react';

import Search from './Search';

import AppContext, { ContextProps, ListItem } from '../provider';

export default () => {
  const [hash, setHash] = useState<string>('');
  const [wordsList, setWordsList] = useState<ListItem[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const value: ContextProps = {
    hash,
    setHash,

    wordsList,
    setWordsList,

    isLoading,
    setLoading,
  };

  return (
    <AppContext.Provider value={value}>
      <Search />
    </AppContext.Provider>
  );
};
