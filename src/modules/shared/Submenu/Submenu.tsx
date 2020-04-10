import React from 'react';
import block from 'bem-cn';

import { Link } from 'react-router-dom';

import { SubLink } from 'shared/types/models';

import './Submenu.scss';

type IProps = { links: SubLink[]; };

const b = block('submenu');

function Submenu({ links }: IProps) {
  return (
    <div className={b()}>
      {
        links.map((link) => {
          return (
            <Link to={link.href} className={b('link')}>{link.title}</Link>
          );
        })
      }
    </div> 
  );
};

export { Submenu };
