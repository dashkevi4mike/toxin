import React from 'react';
import block from 'bem-cn';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

import { Link as LinkType } from 'shared/types/models';

import { Logo } from 'shared/view/elements';

import './Header.scss';

type IOwnProps = { links: LinkType[]; };

type IProps = IOwnProps & RouteComponentProps;

const b = block('header');

class HeaderComponent extends React.Component<IProps> {
  public render() {
    const { links, history } = this.props;

    return (
      <header className={b()}>
        <div className={b('inner')}>
          <div className={b('logo')}>
            <Logo />
          </div>
          <nav className={b('navigation')}>
            {links.map((link: LinkType)=> {
              return (
                <Link 
                  className={b('link', {state: history.location.pathname === link.href ? 'active': 'inactive' })}
                  to={link.href}
                  key={link.title}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    );
  }

}

const wrappedComponent = withRouter(HeaderComponent);

export { wrappedComponent as Header, HeaderComponent, IProps as ILayoutProps };
