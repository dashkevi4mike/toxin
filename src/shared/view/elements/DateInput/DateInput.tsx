import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';
import dayjs from 'dayjs';

import { Input } from '../Input/Input';
import { DatePicker } from '../DatePicker/DatePicker';
import { ExpandIcon } from '../ExpandIcon/ExpandIcon';

import './DateInput.scss';

const b = block('date-input');

type Props = {
  name: string;
  initialChecked?: boolean;
  isRequired?: boolean;
  label: string;
  onChange?: (value: string) => void;
  isPastAllowed: boolean;
}

type State = {
  date: string | undefined;
  isOpen: boolean;
}

class DateInput extends React.Component<Props, State> {
  public state = { isOpen: false, date: undefined };

  render() {
    const { label, name, isRequired, isPastAllowed } = this.props;
    const { isOpen, date } = this.state;

    return (
      <div className={b()}>
        <div className={b('input')}>
          <Input
            placeholder="DD.MM.YYYY"
            name={name}
            label={label}
            maskType="date"
            isRequired={isRequired}
            onChange={this.handleInputChange}
            validateOnChange={false}
            icon={<ExpandIcon direction={isOpen ? 'less' : 'more'} />}
            onIconClick={this.handleChangeState}
            value={date ? date : undefined}
          />
        </div>
        { isOpen ? (
          <div className={b('picker')}>
            <DatePicker
              onDaySelect={this.handleSelectDay}
              close={this.handleChangeState}
              isPastAllowed={isPastAllowed}
              withSubmition
            />
          </div>
        ) : null}
      </div>
    );
  }

  @autobind
  private handleInputChange(value: string) {
    this.setState({ date: value });
  }

  @autobind
  handleChangeState() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  @autobind
  private handleSelectDay(day: Date) {
    const date = dayjs(day).format('DD.MM.YYYY');
    this.setState({ isOpen: false, date });
  }
}

export { DateInput, Props };
      