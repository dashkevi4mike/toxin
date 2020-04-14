import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import './ToggleButton.scss';

const b = block('toggle-button');

type Props = {
  name: string;
  initialChecked?: boolean;
  label: string;
  onChange: (value: boolean) => void;
}

type State = {
  checked: boolean;
}

class ToggleButton extends React.Component<Props, State> {
  public state = { checked: false };

  componentDidMount() {
    const { initialChecked } = this.props;
    this.setState({ checked: !!initialChecked });
  }

  render() {
    const { label, name } = this.props;
    const { checked } = this.state;
    return (
      <div className={b()}>
        <div className={b('label')} onClick={this.handleClick}>
          <input type="checkbox" className={b('toggle-button')} checked={checked} name={name} onChange={()=>{}}/>
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
    if (onChange) { onChange(!checked); }
  }
}

export { ToggleButton, Props };
      