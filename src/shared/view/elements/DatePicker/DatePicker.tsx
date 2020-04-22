import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';
import dayjs from 'dayjs';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { TextButton } from '../TextButton/TextButton';
import { DatePickerNav, Props as DatePickerNavProps } from '../DatePickerNav/DatePickerNav';
import { PickerDay, Props as PickerDayProps } from '../PickerDay/PickerDay';

import './DatePicker.scss';

const b = block('date-picker');

type Props = {
  close: () => void;
  onSelect: (values: Date[]) => void;
  withSubmition: boolean;
  isPastAllowed: boolean;
  periodPicker?: boolean;
  initialValues?: Array<Date | undefined>;
}

type State = {
  startDate?: Date;
  endDate?: Date;
}

const today = new Date();

class DatePicker extends React.Component<Props, State> {
  public state: State = {};

  componentDidMount() {
    const { initialValues: [ startDate, endDate ] = [] } = this.props;
    this.setState({ startDate, endDate });
  }
  
  render() {
    const { withSubmition, close, isPastAllowed, periodPicker } = this.props;
    const { startDate, endDate } = this.state;
    return (
      <div className={b()}>
        <div className={b('inner')}>
          <DayPicker
            onDayClick={this.handleSelect}
            navbarElement={this.renderNavigation}
            renderDay={this.renderDay}
            modifiers={ { 
              selected: this.isSelected,
              today: (date: Date) => this.isEqualDays(today, date),
              disabled: !isPastAllowed ? (date: Date) => this.isPreviousDay(today, date) : undefined,
              highlighted: (date: Date) => Boolean(startDate && endDate && this.isPreviousOrEqualDay(date, startDate) && this.isPreviousOrEqualDay(endDate, date)),
              'start-day': (date: Date) => Boolean(startDate && this.isEqualDays(startDate, date)),
              'end-day': (date: Date) => Boolean(endDate && this.isEqualDays(endDate, date)),
            }} 
          />
        </div>
        {withSubmition ? (
          <div className={b('navigation')}>
            <TextButton
              type="button" 
              text="Close" 
              onClick={close}
            />
            <TextButton 
              type="button" 
              text="Apply changes" 
              onClick={this.handleSubmit} 
              disabled={periodPicker ? !(startDate && endDate) : !startDate} 
            />
          </div>
        ) : null}
      </div>
    );
  }

  @autobind
  private handleSelect(value: Date) {
    const { withSubmition, onSelect } = this.props;
    withSubmition ? this.selectDay(value) : onSelect([ value ]);
  }

  @autobind
  private isSelected(day: Date) {
    const { periodPicker } = this.props;
    const { startDate, endDate } = this.state;

    return !periodPicker ?
      Boolean(startDate && this.isEqualDays(day, startDate))
      : (Boolean(startDate && this.isEqualDays(day, startDate)) || Boolean(endDate && this.isEqualDays(endDate, day)));
  }

  private isEqualDays(day1: Date, day2: Date) {
    return day1.getDate() == day2.getDate() &&
      day1.getMonth() == day2.getMonth() &&
      day1.getFullYear() == day2.getFullYear()
  }

  private isPreviousOrEqualDay(date1: Date, date2: Date) {
    return dayjs(date1).startOf('day') >= dayjs(date2).startOf('day');
  }

  private isPreviousDay(date1: Date, date2: Date) {
    return dayjs(date1).startOf('day') > dayjs(date2).startOf('day');
  }

  @autobind
  private selectDay(date: Date) {
    const { isPastAllowed, periodPicker } = this.props;
    const { startDate, endDate } = this.state;
    if(isPastAllowed || !this.isPreviousDay(today, date)) {
      if(!periodPicker) {
        this.setState({ startDate: date, endDate: undefined });
      } else {
        if (startDate && !endDate && this.isPreviousDay(date, startDate)) {
          this.setState({ startDate, endDate: date });
        } else {
          this.setState({ startDate: date, endDate: undefined });
        }
      }
    }
  }

  @autobind
  private handleSubmit() {
    const { onSelect, periodPicker } = this.props;
    const { startDate, endDate } = this.state;
    if (!periodPicker && startDate) { onSelect([ startDate ]) }
    if (periodPicker && startDate && endDate) { onSelect([ startDate, endDate ]) }
  }

  private renderNavigation(props: DatePickerNavProps) {
    return (
      <DatePickerNav {...props} />
    );
  }

  private renderDay(date: PickerDayProps['date'], modifiers: PickerDayProps['modifiers']) {
    return (<PickerDay date={date} modifiers={modifiers} />);
  }
}

export { DatePicker, Props };
      