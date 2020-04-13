import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import './Checkbox.scss';

const b = block('checkbox');

type Props = {
  id: string;
  name: string;
  initialChecked?: boolean;
  label: string;
  onChange?: (value: boolean) => void;
}

type State = {
  checked: boolean;
}

class Checkbox extends React.Component<Props, State> {
  public state = { checked: false };

  componentDidMount() {
    const { initialChecked } = this.props;
    this.setState({ checked: !!initialChecked });
  }

  render() {
    const { label, id } = this.props;
    const { checked } = this.state;

    return (
      <div className={b()}>
        <div className={b('label')} onClick={this.handleClick}>
          <input type="checkbox" className={b('checkbox')} id={id} checked={checked}/>
          <span>{label}</span>
          <span className={b('checkmark')}/>
        </div>  
      </div>   
    );
  }

  @autobind
  handleClick() {
    const { checked } = this.state;
    const { onChange } = this.props;
    this.setState({ checked: !checked });
    if (onChange) {onChange(!checked); }
  }
}

export { Checkbox, Props };
      