import React from 'react';
import { autobind } from 'core-decorators';
import block from 'bem-cn';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import './Star.scss';

type Props = {
  index: number;
  checked: boolean;
  onChange: (value: number) => void;
}

const b = block('star');

class Star extends React.Component<Props> {

  render() {
    const { checked } = this.props;
    return (
      <div className={b()} onClick={this.handleClick}>
        {checked ? <StarIcon /> : <StarBorderIcon />}
      </div>
    )
  }

  @autobind
  handleClick() {
    const { onChange, index } = this.props;
    if (onChange) { onChange(index); }
  }
}

export { Star, Props };