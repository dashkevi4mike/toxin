import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { Star } from './Star';

import './RateButton.scss';

const b = block('rate-button');

type Props = {
  initialCount: number;
  onChange?: (value: number) => void;
  totalCount: number;
}

type State = {
  count: number;
}

class RateButton extends React.Component<Props, State> {
  public state = { count: 0 };

  componentDidMount() {
    const { initialCount } = this.props;
    this.setState({ count: initialCount });
  }

  render() {
    const { totalCount } = this.props;
    const { count } = this.state;
    return (
      <div className={b()}>
        {
          Array.from(Array(totalCount)).map((_, index) => (
            <Star index={index} checked={(index + 1) <= count} onChange={this.handleClick} />
          ))
        }
      </div>   
    );
  }

  @autobind
  handleClick(index: number) {
    const { onChange } = this.props;
    const count = index + 1;
    this.setState({ count });
    if (onChange) { onChange(count); }
  }
}

export { RateButton, Props };
      