import React from 'react';
import block from 'bem-cn';

import { ColorType } from 'shared/types/models';

import { Color } from '../Color/Color';

import './Colors.scss';

const b = block('colors');

function Colors ({colors}: { colors: ColorType[]}) {
  return (
    <div className={b()}>
      {
        colors.map((color: ColorType)=> {
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
