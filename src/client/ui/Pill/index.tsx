import React from 'react';

import style from './Pill.scss';

const pillColorsLst: string[] = ['green', 'red', 'teal', 'violet', 'blue', 'orange', 'pink'];

interface PillProps {
  children: React.ReactNode,
}

const Pill: React.FC<PillProps> = ({ children }) => {
  const pillColor = pillColorsLst[Math.floor(Math.random() * pillColorsLst.length)];

  return (
    <span className={`${style.pill} ${style[pillColor]}`}>{children}</span>
  );
};

export default Pill;
