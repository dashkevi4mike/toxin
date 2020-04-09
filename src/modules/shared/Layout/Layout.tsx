import React from 'react';
import block from 'bem-cn';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './Layout.scss';

type IProps = RouteComponentProps;

const b = block('layout');

class LayoutComponent extends React.Component<IProps> {
  public render() {
    const { children } = this.props;

    return (
      <div className={b()}>
        <header className={b('header')}>
          <div className={b('header-content')}>
          </div>
        </header>
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
