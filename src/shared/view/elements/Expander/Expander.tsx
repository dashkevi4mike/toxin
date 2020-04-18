import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { ExpandIcon } from '../ExpandIcon/ExpandIcon';

import './Expander.scss';

const b = block('expander');

type Props = {
  title: string;
  onChange: (isOpen: boolean) => void;
  forceChange: (isOpen: boolean) => void;
  isOpen: boolean;
  disabled?: boolean;
}

type State = {
  isOpen: boolean;
}

class Expander extends React.Component<Props, State> {
  public state = { isOpen: false };

  componentDidMount() {
    const { isOpen } = this.props;
    this.setState({ isOpen: isOpen });
  }

  render() {
    const { children, title } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={b()}>
        <div className={b('header')} onClick={this.handleClick}>
          <h3 className={b('title')}>{title}</h3>
          <ExpandIcon direction={isOpen ? 'less' : 'more'} />
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
    const { onChange, disabled } = this.props;
    if (disabled) { return; }
    this.setState({ isOpen: !isOpen });
    if (onChange) {onChange(!isOpen); }
  }
}

export { Expander, Props };
      