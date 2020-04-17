import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import './NumberInput.scss';

const b = block('number-input');

type Props = {
  name: string;
  initialValue: number;
  label: string;
  min: number;
  max: number;
  onChange?: (value: number) => void;
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
          <input 
            name={name} 
            className={b('input')}
            value={value}
          />
          <div>
            <button
              type="button"
              onClick={this.handleDecreseClick}
              className={b('button', { state: value === min ? 'disabled' : 'enabled'})}
            >-</button>
            <div className={b('value')}>{value}</div>
            <button
              type="button"
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
    const { max, onChange } = this.props;
    if (value === max) { return };
    this.setState({ value: value + 1 });
    if (onChange) { onChange(value + 1); };
  }

  @autobind
  handleDecreseClick() {
    const { value } = this.state;
    const { min, onChange } = this.props;
    if (value === min) { return };
    this.setState({ value: value - 1 });
    if (onChange) { onChange(value - 1); };
  }
}

export { NumberInput, Props };
      