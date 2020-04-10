import React from 'react';
import block from 'bem-cn';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

import { FooterLinksGroup, Link as LinkType } from 'shared/types/models';

import { Logo } from 'shared/view/elements';

import './Footer.scss';

type OwnProps = { links: FooterLinksGroup[]; };

type Props = OwnProps & RouteComponentProps;

const b = block('footer');

class FooterComponent extends React.Component<Props> {
  public render() {
    const { links } = this.props;

    return (
      <footer className={b()}>
        <div className={b('inner')}>
          <div className={b('aside')}>
            <div className={b('logo')}>
              <Logo />
            </div>
            <p className={b('description')}>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.</p>
          </div>
          <nav className={b('navigation')}>
            {links.map((group: FooterLinksGroup)=> {
              return (
                <div className={b('links-group')}>
                  <h3 className={b('group-title')}>{group.title}</h3>
                  {group.links.map((link: LinkType)=> {
                    return (
                      <Link to={link.href} className={b('link')}>{link.title}</Link>
                    );
                  })}
                </div>
              );
            })}
          </nav>
          <div className={b('aside')}>
            <div className={b('logo')}>
              <Logo />
            </div>
            <p className={b('description')}>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.</p>
          </div>
        </div>
      </footer>
    );
  }

}

const wrappedComponent = withRouter(FooterComponent);

export { wrappedComponent as Footer, FooterComponent, Props };
