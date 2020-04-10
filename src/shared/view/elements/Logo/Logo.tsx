import React from 'react';
import block from 'bem-cn';

import './Logo.scss';

const b = block('logo');

function Logo() {
  return (
    <img className={b()} src={require('./imgs/Logo.svg')} />   
  );
};

export { Logo };
