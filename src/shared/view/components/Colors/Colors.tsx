import React from 'react';
import block from 'bem-cn';

import { colors } from 'shared/styles/colors';

import { Color } from '../Color/Color';

import './Colors.scss';

const b = block('colors');

function Colors () {
  return (
    <div className={b()}>
      {
        colors.map((color)=> {
          const { hex, name, opacity } = color;
          return (
            <div className={b('color')} key={name}>
              <Color hex={hex} name={name} opacity={opacity} />
            </div>
          );
        })
      } 
    </div>
  );
}

export { Colors };
