import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import './LikeButton.scss';

const b = block('like-button');

type Props = {
  name: string;
  initialChecked?: boolean;
  count: number;
  onChange: (value: boolean) => void;
}

type State = {
  checked: boolean;
}

class LikeButton extends React.Component<Props, State> {
  public state = { checked: false };

  componentDidMount() {
    const { initialChecked } = this.props;
    this.setState({ checked: !!initialChecked });
  }

  render() {
    const { count } = this.props;
    const { checked } = this.state;

    return (
      <div className={b()} onClick={this.handleClick}>
        <input type="checkbox" className={b('checkbox')} checked={checked} />
        <div className={b('content')}>
          <div className={b('heart')}>
            { checked ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
          </div>
          <div className={b('count')}>{count}</div>
        </div>
        <span className={b('checkmark')} />
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

export { LikeButton, Props };
      