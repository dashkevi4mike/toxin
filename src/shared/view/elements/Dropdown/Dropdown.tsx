import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import './Dropdown.scss';

const b = block('dropdown');

type Props = {
  placeholder: string;
  label: string;
  disabled?: boolean;
}

type State = {
  isOpen: boolean;
}

class Dropdown extends React.Component<Props, State> {
  public state = { isOpen: false };

  render() {
    const { children, placeholder, label, disabled } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={b({ state: disabled ? 'disabled' : 'enabled'})}>
        <h3 className={b('label')}>{label}</h3>
        <div className={b('header')} onClick={this.handleClick}>
          <p className={b('placeholder')}>{placeholder}</p>
          <img className={b('icon', { direction: isOpen ? 'reverse' : 'normal'})} src={require('./imgs/expand_more.svg')}/>
        </div>
        <div className={b('content', { 'state': isOpen ? 'open' : 'closed' })}>
          <div className={b('content-inner')}>
            {children}
          </div>
        </div>
      </div> 
    );
  }

  @autobind
  handleClick() {
    const { isOpen } = this.state;
    const { disabled } = this.props;
    if (disabled) { return; }
    this.setState({ isOpen: !isOpen });
  }
}

export { Dropdown, Props };
      