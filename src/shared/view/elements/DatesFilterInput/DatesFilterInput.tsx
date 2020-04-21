import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';
import dayjs from 'dayjs';

import { Input } from '../Input/Input';
import { DatePicker } from '../DatePicker/DatePicker';
import { ExpandIcon } from '../ExpandIcon/ExpandIcon';

import { makeDateValidator, makePastDateValidator } from 'shared/helpers/validators';

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
  startDate: string | undefined;
  endDate: string | undefined;
  value: string | undefined;
  isOpen: boolean;
}

const validators = [ ];
const validatorsWithPastDate = [ makePastDateValidator('past day is not allowed') ];

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
            />
          </div>
        ) : null}
      </div>
    );
  }

  @autobind
  private handleInputChange(value: string) {
    this.setState({ value });
  }

  @autobind
  handleChangeState() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  @autobind
  private handleSelectDays([ startDate, endDate ]: Date[]) {
    const sDate = dayjs(startDate).format('MM.DD.YYYY');
    const eDate = dayjs(endDate).format('MM.DD.YYYY');

    this.setState({ isOpen: false, startDate: sDate, endDate: eDate, value: `${sDate}-${eDate}` });
  }
}

export { DatesFilterInput, Props };
      