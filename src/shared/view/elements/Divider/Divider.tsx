import React from 'react';
import block from 'bem-cn';

import './Divider.scss';

const b = block('divider');

function Divider() {
  return (
    <hr className={b()} />
  );
};

export { Divider };
