import React from 'react';
import style from './Loader.scss';

const Loader: React.FC = () => (
  <div className={style.loader}>
    <div className={style.circle} />
    <div className={style.circle} />
    <div className={style.circle} />
  </div>
);

export default Loader;
