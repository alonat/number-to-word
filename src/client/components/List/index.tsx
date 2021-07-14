import React, { useState } from 'react';

import style from './List.scss';
import Pill from '../../ui/Pill';

type ListItem = {
  id: string,
  text: string
};

const ListComponent: React.FC = () => {
  const [list] = useState<ListItem[]>([{ id: 'wefrefr', text: 'cat' }, { id: 'erfer', text: 'catcat' }]);

  return (
    <div>
      <p className={style.listTitle}>Search results:</p>
      <ul className={style.listWrapper}>
        {list.map((el) => (
          <li className={style.listItem} key={el.id}>
            <Pill>{el.text}</Pill>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
