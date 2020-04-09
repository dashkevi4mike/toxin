import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { MenuIcon } from 'shared/view/elements';

import './LayoutHeaderMenu.scss';

interface IMenuItem {
  path: string;
  title: string;
}

interface IOwnProps {
  menuItems: IMenuItem[];
  activeItemPath: string;
}

interface IState {
  isMenuOpen: boolean;
}

type IProps = IOwnProps;
const b = block('layout-header-menu');

class LayoutHeaderMenu extends React.PureComponent<IProps, IState> {
  public state: IState = {
    isMenuOpen: false,
  };

  public render() {
    const { isMenuOpen } = this.state;
    return (
      <div className={b()}>
        <div
          tabIndex={0}
          role="menu"
          className={b('menu-icon', { open: isMenuOpen })}
          onClick={this.handleMenuClick}
          onKeyPress={this.handleKeyPress}
          onTouchEnd={this.handleMenuTouchEnd}
        >
          <MenuIcon />
        </div>
      </div>
    );
  }

  private toggleMenu(e: React.SyntheticEvent) {
    e.preventDefault();
    this.setState((prevState: IState) => ({ isMenuOpen: !prevState.isMenuOpen }));
  }

  @autobind
  private handleMenuClick(e: React.MouseEvent<HTMLDivElement>) {
    this.toggleMenu(e);
  }

  @autobind
  private handleKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter') {
      this.toggleMenu(e);
    }
  }

  @autobind
  private handleMenuTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    this.toggleMenu(e);
  }

}

export {
  LayoutHeaderMenu,
  IMenuItem as IHeaderMenuItem,
  IProps as IHeaderMenuProps,
  IState as IHeaderMenuState,
};
