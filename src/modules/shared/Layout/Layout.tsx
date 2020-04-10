import React from 'react';
import block from 'bem-cn';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Link, FooterLinksGroup } from 'shared/types/models';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import './Layout.scss';

type IOwnProps = { headerLinks: Link[]; footerLinks: FooterLinksGroup[] };
type IProps = IOwnProps & RouteComponentProps;

const b = block('layout');

class LayoutComponent extends React.Component<IProps> {
  public render() {
    const { children, headerLinks, footerLinks } = this.props;

    return (
      <div className={b()}>
        <div className={b('header')}>
          <Header links={headerLinks} />
        </div>
        <div className={b('content')}>
          {children}
        </div>
        <div className={b('footer')}>
          <Footer links={footerLinks}/>
        </div>
      </div>
    );
  }

}

const wrappedComponent = withRouter(LayoutComponent);

export { wrappedComponent as Layout, LayoutComponent, IProps as ILayoutProps };
