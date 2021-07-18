import { createContext } from 'react';

export type ListItem = {
  id: string,
  word: string
};

export type ContextProps = {
  hash: string,
  setHash: (e: string) => void,

  wordsList: ListItem[],
  setWordsList: (list: ListItem[]) => void,

  isLoading: boolean,
  setLoading: (isLoading: boolean) => void
};

const defaultContext = {
  hash: '',
  setHash: () => {},

  wordsList: [],
  setWordsList: () => {},

  isLoading: false,
  setLoading: () => {},
};

const AppContext = createContext<ContextProps>(defaultContext);
AppContext.displayName = 'WordsContext';

export default AppContext;
