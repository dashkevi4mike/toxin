import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';
import dayjs from 'dayjs';

import { Input } from '../Input/Input';
import { DatePicker } from '../DatePicker/DatePicker';
import { ExpandIcon } from '../ExpandIcon/ExpandIcon';

import { makeDateValidator, makePastDateValidator } from 'shared/helpers/validators';

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
  date: string;
  isOpen: boolean;
}

const validators = [ makeDateValidator('Invalid date') ];
const validatorsWithPastDate = [ makeDateValidator('Invalid date'), makePastDateValidator('Past day is not allowed') ];

class DateInput extends React.Component<Props, State> {
  public state = { isOpen: false, date: '' };

  render() {
    const { label, name, isRequired, isPastAllowed } = this.props;
    const { isOpen, date } = this.state;

    return (
      <div className={b()}>
        <div className={b('input')}>
          <Input
            placeholder="MM.DD.YYYY"
            name={name}
            label={label}
            mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
            validators={isPastAllowed ? validators : validatorsWithPastDate}
            onChange={this.handleInputChange}
            validateOnChange={false}
            icon={<ExpandIcon direction={isOpen ? 'less' : 'more'} />}
            onIconClick={this.handleChangeState}
            value={date ? date : undefined}
            isRequired={isRequired}
          />
        </div>
        { isOpen ? (
          <div className={b('picker')}>
            <DatePicker
              onSelect={this.handleSelectDay}
              close={this.handleChangeState}
              isPastAllowed={isPastAllowed}
              withSubmition
              initialValues={this.getInitialValues()}
            />
          </div>
        ) : null}
      </div>
    );
  }

  private getInitialValues() {
    const { date } = this.state;
    return [ this.getDate(date) ];
  }

  private getDate(date: string) {
    return date ? new Date(date) : undefined;
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
  private handleSelectDay([ day ]: Date[]) {
    const date = dayjs(day).format('MM.DD.YYYY');
    this.setState({ isOpen: false, date });
  }
}

export { DateInput, Props };
      