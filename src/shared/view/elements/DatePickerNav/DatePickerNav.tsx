import React from 'react';
import block from 'bem-cn';

import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';

import './DatePickerNav.scss';

const b = block('date-picker-nav');

type Props = {
  onPreviousClick?: () => void;
  onNextClick?: () => void;
}

const ENTER = 13;
const SPACE = 32;

class DatePickerNav extends React.Component<Props> {

  render() {
    const { onPreviousClick, onNextClick } = this.props;

    return (
      <div className={b()}>
        <span
          tabIndex={0}
          role="button"
          key="previous"
          className={b('previous', { disabled: !Boolean(onPreviousClick)})}
          onKeyDown={onPreviousClick ? this.handlePreviousKeyDown : undefined}
          onClick={onPreviousClick ? this.handlePreviousClick : undefined}
        >
          <ArrowBack />
        </span>
        <span
          tabIndex={0}
          role="button"
          key="right"
          className={b('next', { disabled: !Boolean(onNextClick)})}
          onKeyDown={onNextClick ? this.handleNextKeyDown : undefined}
          onClick={onNextClick ? this.handleNextClick : undefined}
        >
          <ArrowForward />
        </span>
      </div>
    );
  }

  private handleNextClick = () => {
    if (this.props.onNextClick) {
      this.props.onNextClick();
    }
  };

  private handlePreviousClick = () => {
    if (this.props.onPreviousClick) {
      this.props.onPreviousClick();
    }
  };

  private handleNextKeyDown = (e: any) => {
    if (e.keyCode !== ENTER && e.keyCode !== SPACE) {
      return;
    }
    e.preventDefault();
    this.handleNextClick();
  };

  private handlePreviousKeyDown = (e: any) => {
    if (e.keyCode !== ENTER && e.keyCode !== SPACE) {
      return;
    }
    e.preventDefault();
    this.handlePreviousClick();
  };
}

export { DatePickerNav, Props };
      