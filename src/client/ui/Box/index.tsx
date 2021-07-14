import React from 'react';

import css from './Box.scss';

interface BoxSharedProps {
  children: React.ReactNode
}

const Box: React.FC<BoxSharedProps> = ({ children }) => (
  <div className={css.box}>
    {children}
  </div>
);

const BoxWrapper: React.FC<BoxSharedProps> = ({ children }) => (
  <div className={css.boxWrapper}>
    {children}
  </div>
);

export {
  Box,
  BoxWrapper,
};
