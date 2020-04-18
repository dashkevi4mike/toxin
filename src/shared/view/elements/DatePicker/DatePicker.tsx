import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { TextButton } from '../TextButton/TextButton';

import './DatePicker.scss';

const b = block('date-picker');

type Props = {
  close: () => void;
  onDaySelect: (value: Date) => void;
  withSubmition: boolean;
}

type State = {
  date?: Date;
}

class DatePicker extends React.Component<Props, State> {
  public state: State = {};
  
  render() {
    const { withSubmition, onDaySelect, close } = this.props;
    return (
      <div className={b()}>
        <div className={b('inner')}>
          <DayPicker
            onDayClick={withSubmition ? this.selectDay : onDaySelect}
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
  private selectDay(date: Date) {
    this.setState({ date });
  }

  @autobind
  private handleSubmit() {
    const { onDaySelect } = this.props;
    const { date } = this.state;
    return date ? onDaySelect(date) : null;
  }
}

export { DatePicker, Props };
      