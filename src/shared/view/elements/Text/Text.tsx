import React, { ReactNode } from 'react';
import block from 'bem-cn';

import './Text.scss';

const b = block('text');

type Props = {
  children: ReactNode;
}

function Text(props: Props) {
  const { children } = props;
  return (
    <p className={b()}>{children}</p>
  );
}

export { Text, Props };
      
