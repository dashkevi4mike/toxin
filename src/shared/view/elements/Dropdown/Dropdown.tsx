import React from 'react';
import block from 'bem-cn';

import { ExpandIcon } from '../ExpandIcon/ExpandIcon';

import './Dropdown.scss';

const b = block('dropdown');

type Props = {
  placeholder: string;
  label: string;
  disabled?: boolean;
  isOpen: boolean;
  onChange: () => void;
  children: React.ReactNode;
}

function Dropdown({ children, placeholder, label, disabled, onChange, isOpen }: Props) {
  return (
    <div className={b({ state: disabled ? 'disabled' : 'enabled'})}>
      <h3 className={b('label')}>{label}</h3>
      <div className={b('header')} onClick={onChange}>
        <p className={b('placeholder')}>{placeholder}</p>
        <ExpandIcon direction={isOpen ? 'less' : 'more'} />
      </div>
      <div className={b('content', { 'state': isOpen ? 'open' : 'closed' })}>
        <div className={b('content-inner')}>
          {children}
        </div>
      </div>
    </div> 
  );
}

export { Dropdown, Props };
      