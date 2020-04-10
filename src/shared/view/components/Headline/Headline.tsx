import React from 'react';
import block from 'bem-cn';

import { HeadlineType } from 'shared/types/models';

import './Headline.scss';

const b = block('headline');

function Headline({ type, text }: HeadlineType) { 
  return (
    <div 
      className={b()} 
      dangerouslySetInnerHTML={{
        __html: `<${type} class='${b('text', {type})}'>${type} ${text}</${type}>`
      }}>
    </div>
  );
}
  
export { Headline };