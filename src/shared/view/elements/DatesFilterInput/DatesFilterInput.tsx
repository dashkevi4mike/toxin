import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';
import dayjs from 'dayjs';

import { Input } from '../Input/Input';
import { DatePicker } from '../DatePicker/DatePicker';
import { ExpandIcon } from '../ExpandIcon/ExpandIcon';

import { makePastDatesFilterValidator, makeDatePeriodValidator, Validator } from 'shared/helpers/validators';

import './DatesFilterInput.scss';

const b = block('dates-filter-input');

type Props = {
  name: string;
  initialChecked?: boolean;
  isRequired?: boolean;
  label: string;
  onChange?: (value: string) => void;
  isPastAllowed: boolean;
}

type State = {
  startDate?: string;
  endDate?: string;
  value: string;
  isOpen: boolean;
}

const validators: Validator[] = [ makeDatePeriodValidator('Invalid period')];
const validatorsWithPastDate = [ makeDatePeriodValidator('Invalid period'), makePastDatesFilterValidator('Past day is not allowed') ];

class DatesFilterInput extends React.Component<Props, State> {
  public state = { isOpen: false, value: '', startDate: '', endDate: '' };

  render() {
    const { label, name, isRequired, isPastAllowed } = this.props;
    const { isOpen, value } = this.state;

    return (
      <div className={b()}>
        <div className={b('input')}>
          <Input
            placeholder="MM.DD.YYYY-MM.DD.YYYY"
            name={name}
            label={label}
            mask={[/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/]}
            validators={isPastAllowed ? validators : validatorsWithPastDate}
            onChange={this.handleInputChange}
            validateOnChange={false}
            icon={<ExpandIcon direction={isOpen ? 'less' : 'more'} />}
            onIconClick={this.handleChangeState}
            value={value ? value : undefined}
            isRequired={isRequired}
          />
        </div>
        { isOpen ? (
          <div className={b('picker')}>
            <DatePicker
              onSelect={this.handleSelectDays}
              close={this.handleChangeState}
              isPastAllowed={isPastAllowed}
              withSubmition
              periodPicker
              initialValues={this.getInitialValues()}
            />
          </div>
        ) : null}
      </div>
    );
  }

  private getInitialValues() {
    const { startDate, endDate } = this.state;
    return [ this.getDate(startDate), this.getDate(endDate) ];
  }

  private getDate(date: string) {
    return date && dayjs(date).isValid() ? new Date(date) : undefined;
  }

  @autobind
  private handleInputChange(value: string) {
    const [ startDate, endDate ] = value.split('-');
    const sDate = this.getDate(startDate);
    const eDate = this.getDate(endDate);
    this.setState({ 
      value, 
      startDate: sDate ? this.formatDate(sDate) : undefined,
      endDate: eDate ? this.formatDate(eDate) : undefined,
    });
  }

  @autobind
  handleChangeState() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  private formatDate(date: Date) {
    return dayjs(date).format('MM.DD.YYYY');
  }

  @autobind
  private handleSelectDays([ startDate, endDate ]: Date[]) {
    const sDate = this.formatDate(startDate);
    const eDate = this.formatDate(endDate);

    this.setState({ isOpen: false, startDate: sDate, endDate: eDate, value: `${sDate}-${eDate}` });
  }
}

export { DatesFilterInput, Props };
      