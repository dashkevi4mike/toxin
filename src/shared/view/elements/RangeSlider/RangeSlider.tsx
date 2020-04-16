import React from 'react';
import block from 'bem-cn';
// import { autobind } from 'core-decorators';

const Slider = require('rc-slider');

import 'rc-slider/assets/index.css';
import './RangeSlider.scss';
import { autobind } from 'core-decorators';


const b = block('range-slider');

type Props = {
  title: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number[];
  onChange: (value: number[]) => void;
}

type State = {
  value: {
    min: number;
    max: number;
  }
}

class RangeSlider extends React.Component<Props, State> {

  public state = { value: { min: 0, max: 0 } };

  componentDidMount() {
    const { defaultValue: [ min, max] } = this.props;
    this.setState({ value: { min, max } });
  }

  render() {
    const { title, step, defaultValue, min, max } = this.props;

    const { value } = this.state;

    return (
      <div className={b()}>
        <div className={b('header')}>
          <h3 className={b('title')}>{title}</h3>
          <div className={b('values')}>{`$${value.min}-$${value.max}`}</div>
        </div>
        <Slider.Range
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
          onChange={this.handleChange}
        />
      </div> 
    );
  }

  @autobind
  private handleChange([ min, max ]: number[]) {
    this.setState({ value: { min, max }});
    this.props.onChange([min, max]);
  }
}

export { RangeSlider, Props };
      