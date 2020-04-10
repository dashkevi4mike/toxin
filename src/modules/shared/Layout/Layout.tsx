import React from 'react';
import block from 'bem-cn';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Link } from 'shared/types/models';

import { Header } from '../Header/Header';

import './Layout.scss';

type IOwnProps = { headerLinks: Link[]; };
type IProps = IOwnProps & RouteComponentProps;

const b = block('layout');

class LayoutComponent extends React.Component<IProps> {
  public render() {
    const { children, headerLinks } = this.props;

    return (
      <div className={b()}>
        <div className={b('header')}>
          <Header links={headerLinks} />
        </div>
        <div className={b('content')}>
          {children}
        </div>
        <footer className={b('footer')}>
          <div className={b('footer-content')}>
          </div>
        </footer>
      </div>
    );
  }

}

const wrappedComponent = withRouter(LayoutComponent);

export { wrappedComponent as Layout, LayoutComponent, IProps as ILayoutProps };
