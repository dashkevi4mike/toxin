import React from 'react';
import block from 'bem-cn';

import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

import './ExpandIcon.scss';

const b = block('expand-icon');

type Props = {
  direction: 'more' | 'less';
}

function ExpandIcon(props: Props) {
  const { direction } = props;
  return (
    <div className={b()}>
      { direction === 'more' ? <ExpandMore /> : <ExpandLess /> }
    </div>
  );
}

export { ExpandIcon, Props };
      
