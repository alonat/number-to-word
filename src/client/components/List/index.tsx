import React, { useContext } from 'react';

import style from './List.scss';
import Pill from '../../ui/Pill';
import AppContext from '../../provider';

const ListComponent: React.FC = () => {
  const { wordsList, hash } = useContext(AppContext);

  if (!wordsList.length && !hash) {
    return (
      <p className={style.listTitle}>Let&apos;s try to find something</p>
    );
  }

  if (!wordsList.length && hash) {
    return (
      <p className={style.listTitle}>
        Oops! Try something else, please. There are no existing words for your input
      </p>
    );
  }

  return (
    <div>
      <p className={style.listTitle}>Search results:</p>
      <ul className={style.listWrapper}>
        {wordsList.map((el) => (
          <li className={style.listItem} key={el.id}>
            <Pill>{el.word}</Pill>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
