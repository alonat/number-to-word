import React from 'react';
import style from './Loader.scss';

const Loader: React.FC = () => (
  <div className={style.loader}>
    <div className={style.circle} id="a" />
    <div className={style.circle} id="b" />
    <div className={style.circle} id="c" />
  </div>
);

export default Loader;
