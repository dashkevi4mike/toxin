
import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { Radio } from '../Radio/Radio';

import './RadioGroup.scss';

const b = block('radio-group');

type OptionProps = {
  label: string; 
  value: string;
}

type Props = {
  name: string;
  initialValue?: string;
  options: OptionProps[];
  onChange?: (value: string) => void;
}

type State = {
  checkedValue: string;
}

class RadioGroup extends React.Component<Props, State> {
  public state = { checkedValue: '' };

  componentDidMount() {
    const { initialValue } = this.props;
    if (initialValue) {
      this.setState({ checkedValue: initialValue });
    }
  }

  render() {
    const { name, options } = this.props;
    const { checkedValue } = this.state;

    return (
      <div className={b()}>
        {options.map((option) => (
          <div className={b('radio')} key={option.value}>
            <Radio
              name={name}
              label={option.label}
              checked={checkedValue === option.value}
              onChange={this.handleClick}
              value={option.value}
            />
          </div>
        ))}
      </div>   
    );
  }

  @autobind
  handleClick(value: string) {
    const { onChange } = this.props;
    this.setState({ checkedValue: value });
    if (onChange) {onChange(value); }
  }
}

export { RadioGroup, Props };
      