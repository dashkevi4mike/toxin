import React from 'react';
import { autobind } from 'core-decorators';

import { Dropdown } from './Dropdown';

type State = {
  isOpen: boolean;
}

type Props = {
  placeholder: string;
  label: string;
  disabled?: boolean;
}

class SelfControlledDropdown extends React.Component<Props, State> {
  public state = { isOpen: false };

  render() {
    const { isOpen } = this.state;

    return (
      <Dropdown {...this.props} isOpen={isOpen} onChange={this.handleClick}>
        {this.props.children}
      </Dropdown>
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

export { SelfControlledDropdown, Props };
      