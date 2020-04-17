import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import './NumberInput.scss';

const b = block('number-input');

type Props = {
  name: string;
  initialValue: number;
  label: string;
  onChange?: (value: number) => void;
  min: number;
  max: number;
}

type State = {
  value: number;
}

class NumberInput extends React.Component<Props, State> {
  public state = { value: 0 };

  componentDidMount() {
    const { initialValue } = this.props;
    this.setState({ value: initialValue });
  }

  render() {
    const { label, min, max, name } = this.props;
    const { value } = this.state;

    return (
      <div className={b()}>
        <label className={b('label')}>
          {label}
          <input type="number" className={b('input')} value={value} name={name} />
          <div>
            <button
              onClick={this.handleDecreseClick}
              className={b('button', { state: value === min ? 'disabled' : 'enabled'})}
            >-</button>
            <div className={b('value')}>{value}</div>
            <button
              onClick={this.handleIncreseClick}
              className={b('button', { state: value === max ? 'disabled' : 'enabled'})}
            >+</button>
          </div>
        </label>  
      </div>   
    );
  }

  @autobind
  handleIncreseClick() {
    const { value } = this.state;
    const { onChange, max } = this.props;
    if (value === max) { return };
    this.setState({ value: value + 1 });
    if (onChange) { onChange(value + 1); };
  }

  @autobind
  handleDecreseClick() {
    const { value } = this.state;
    const { onChange, min } = this.props;
    if (value === min) { return };
    this.setState({ value: value - 1 });
    if (onChange) { onChange(value - 1); };
  }
}

export { NumberInput, Props };
      