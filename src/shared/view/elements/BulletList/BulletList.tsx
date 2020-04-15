import React, { ReactNode } from 'react';
import block from 'bem-cn';

import './BulletList.scss';

const b = block('bullet-list');

type Props = {
  list: ReactNode[];
}

function BulletList(props: Props) {
  const { list } = props;
  return (
    <ul className={b()}>
      {list.map((item) => (
        <li className={b('item')}>{item}</li>
      ))}
    </ul>
  );
}

export { BulletList, Props };