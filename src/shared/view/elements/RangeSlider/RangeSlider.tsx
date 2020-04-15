import React from 'react';
import block from 'bem-cn';
// import { autobind } from 'core-decorators';

const Slider = require('rc-slider');

import 'rc-slider/assets/index.css';
import './RangeSlider.scss';


const b = block('range-slider');

type Props = {
  
}

class RangeSlider extends React.Component<Props> {

  render() {

    return (
      <div className={b()}>
        <Slider.Range />
      </div> 
    );
  }
}

export { RangeSlider, Props };
      