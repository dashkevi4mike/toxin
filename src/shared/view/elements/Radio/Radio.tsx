import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import './Radio.scss';

const b = block('radio');

type Props = {
  name: string;
  label: string;
  onChange: (value: string) => void;
  value: string;
  checked?: boolean;
}

class Radio extends React.Component<Props> {

  render() {
    const { label, value, name, checked } = this.props;

    return (
      <div className={b()}>
        <div className={b('label')} onClick={this.hanldeChange}>
          <input type="radio" className={b('radio')} value={value} name={name} checked={checked} />
          <span>{label}</span>
          <span className={b('checkmark')}/>
        </div>  
      </div>   
    );
  }

  @autobind
  private hanldeChange() {
    const { value, onChange} = this.props;
    onChange(value);
  }

}

export { Radio, Props };
      