import React from 'react';
import block from 'bem-cn';

import { Headline } from '../Headline/Headline';
import { HeadlineType } from 'shared/types/models'

import './Headlines.scss';

const b = block('headlines');

function Headlines ({ headlines }: { headlines: HeadlineType[]}) {
  return (
    <div className={b()}>
      {
        headlines.map((headline: HeadlineType)=> {
          const { type, text } = headline;
          return (
            <div className={b('headline')} key={type}>
              <Headline type={type} text={text} />
            </div>
          );
        })
      } 
    </div>
  );
}

export { Headlines };
