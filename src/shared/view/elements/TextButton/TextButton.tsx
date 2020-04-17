import React from 'react';
import block from 'bem-cn';

import './TextButton.scss';

const b = block('text-button');

type Props = {
  id?: string;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  text: string;
}

function TextButton(props: Props) {
  const { text } = props;
  return (
    <button className={b()} {...props}>{text}</button>
  );
}

export { TextButton, Props };
      
