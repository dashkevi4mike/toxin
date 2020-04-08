import React from 'react';
import block from 'bem-cn';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { autobind } from 'core-decorators';

import { entry } from 'features/profile';

import { routes } from '../../routes';
import { LayoutHeaderMenu } from './LayoutHeaderMenu/LayoutHeaderMenu';
import './Layout.scss';

interface IOwnProps {
  title: string;
}

const ProfilePreview = entry.containers.ProfilePreview;

type IProps = IOwnProps & RouteComponentProps;

const b = block('layout');

class LayoutComponent extends React.Component<IProps> {
  public render() {
    const { children, title, location } = this.props;

    return (
      <div className={b()}>
        <header className={b('header')}>
          <div className={b('header-content')}>
            <div className={b('left-menu')}>
              <LayoutHeaderMenu
                menuItems={[]}
                activeItemPath={location.pathname}
              />
            </div>
            <div className={b('right-menu')}>
              <ProfilePreview onEditClick={this.handleEditProfileClick} />
              <div className={b('language-selector')}></div>
            </div>
          </div>
        </header>
        <div className={b('content')}>
          <h1 className={b('title')}>
            {title}
          </h1>
          {children}
        </div>
        <footer className={b('footer')}>
          <div className={b('footer-content')}>
            <a
              className={b('company-link')}
              href="https://fullstack-development.com"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </div>
        </footer>
      </div>
    );
  }



  @autobind
  private handleEditProfileClick() {
    const { history } = this.props;
    history.push(routes.profile.getRoutePath());
  }
}

const wrappedComponent = withRouter(LayoutComponent);

export { wrappedComponent as Layout, LayoutComponent, IProps as ILayoutProps };
