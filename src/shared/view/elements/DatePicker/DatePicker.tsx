import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { TextButton } from '../TextButton/TextButton';
import { DatePickerNav, Props as DatePickerNavProps } from '../DatePickerNav/DatePickerNav';

import './DatePicker.scss';

const b = block('date-picker');

type Props = {
  close: () => void;
  onDaySelect: (value: Date) => void;
  withSubmition: boolean;
  isPastAllowed: boolean;
}

type State = {
  date?: Date;
}

const today = new Date();

class DatePicker extends React.Component<Props, State> {
  public state: State = {};
  
  render() {
    const { withSubmition, onDaySelect, close, isPastAllowed } = this.props;
    return (
      <div className={b()}>
        <div className={b('inner')}>
          <DayPicker
            onDayClick={withSubmition ? this.selectDay : onDaySelect}
            navbarElement={this.renderNavigation}
            modifiers={ { 
              selected: this.isSelected,
              today: this.isToday,
              disabled: !isPastAllowed ? this.isPreviousDay: undefined
            }} 
          />
        </div>
        {withSubmition ? (
          <div className={b('navigation')}>
            <TextButton type="button" text="Close" onClick={close} />
            <TextButton type="button" text="Apply changes" onClick={this.handleSubmit} />
          </div>
        ) : null}
      </div>
    );
  }

  @autobind
  private isSelected(day: Date) {
    const { date } = this.state;
    return Boolean (date && this.isEqualDays(day, date));
  }

  @autobind
  private isToday(day: Date) {
    return this.isEqualDays(today, day);
  }

  private isEqualDays(day1: Date, day2: Date) {
    return day1.getDate() == day2.getDate() &&
      day1.getMonth() == day2.getMonth() &&
      day1.getFullYear() == day2.getFullYear()
  }

  private isPreviousDay(day: Date) {
    return today > day;
  }

  @autobind
  private selectDay(date: Date) {
    const { isPastAllowed } = this.props;
    if(isPastAllowed || !this.isPreviousDay(date)) {
      this.setState({ date });
    }
  }

  @autobind
  private handleSubmit() {
    const { onDaySelect } = this.props;
    const { date } = this.state;
    return date ? onDaySelect(date) : null;
  }

  private renderNavigation(props: DatePickerNavProps) {
    return (
      <DatePickerNav {...props} />
    );
  }
}

export { DatePicker, Props };
      