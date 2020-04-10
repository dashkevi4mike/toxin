import React from 'react';
import block from 'bem-cn';

import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import { SubLink } from 'shared/types/models';

import './Submenu.scss';

type OwnProps = { links: SubLink[]; };
type Props = RouteComponentProps & OwnProps;

const b = block('submenu');

function SubmenuComponent({ links, history }: Props) {
  return (
    <div className={b()}>
      {
        links.map((link) => {
          return (
            <Link 
              to={link.href} 
              className={b('link', {state: history.location.pathname.indexOf(link.href) !== -1 ? 'active': 'inactive' })}
            >{link.title}</Link>
          );
        })
      }
    </div> 
  );
};

const wrappedComponent = withRouter(SubmenuComponent);

export { wrappedComponent as Submenu, SubmenuComponent, Props };
