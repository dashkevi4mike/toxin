import React from 'react';
import block from 'bem-cn';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

import { Link as LinkType } from 'shared/types/models';

import { Logo, Button } from 'shared/view/elements';

import { routes } from 'modules/routes';

import { Submenu } from '../Submenu/Submenu';

import './Header.scss';

type OwnProps = { links: LinkType[]; };

type Props = OwnProps & RouteComponentProps;

const b = block('header');

class HeaderComponent extends React.Component<Props> {
  public render() {
    const { links, history } = this.props;

    return (
      <header className={b()}>
        <div className={b('inner')}>
          <Link 
            className={b('logo')}
            to={routes.intro.getRedirectPath()}
            key={routes.intro.getElementKey()}
          >
            <Logo />
          </Link>
          <nav className={b('navigation')}>
            {links.map((link: LinkType)=> {
              return (
                <Link 
                  className={b('link', { state: history.location.pathname.indexOf(link.href) !== -1 ? 'active': 'inactive' })}
                  to={link.href}
                  key={link.title}
                >
                  {link.title} 
                  {link.links && <img className={b('expand')} src={require('./imgs/expand_more.svg')}/>}
                  {link.links && (
                    <div className={b('submenu')}>
                      <Submenu links={link.links} />
                    </div>
                  )}
                </Link>
              );
            })}
            <Link
              className={b('link')}
              to={routes.auth["sign-in"].getRedirectPath()}
              key={routes.auth.getElementKey()}
            >
              <Button onClick={()=>{}} type="button" theme="filled">Sign In</Button>
            </Link>
          </nav>
        </div>
      </header>
    );
  }

}

const wrappedComponent = withRouter(HeaderComponent);

export { wrappedComponent as Header, HeaderComponent, Props };
