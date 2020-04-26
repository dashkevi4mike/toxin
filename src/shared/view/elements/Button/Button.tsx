import React from 'react';
import block from 'bem-cn';

import './Button.scss';

const b = block('button');

type Props = {
  id?: string;
  disabled?: boolean;
  onClick?: () => void;
  theme: 'filled' | 'transparent';
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  fullWidth?: boolean;
}

function Button(props: Props) {
  const { theme, fullWidth, children } = props;
  return (
    <button className={b({ theme: theme, 'full-width': fullWidth })} {...props}>{children}</button>
  );
}

export { Button, Props };
      
