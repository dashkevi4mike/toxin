import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';
import { Form, FormRenderProps } from 'react-final-form';

import { getFieldWithComponent } from 'shared/helpers/react'

import { Dropdown } from '../Dropdown/Dropdown';
import { NumberInput } from '../NumberInput/NumberInput';
import { TextButton } from '../TextButton/TextButton';

import './GuestsDropdown.scss';

const b = block('guests-dropdown');

type Props = {
  onChange?: (values: any) => void;
}

type State = {
  isOpen: boolean;
  adults: number;
  childs: number;
  babies: number;
}

const InputNumberField = getFieldWithComponent(NumberInput);

class GuestsDropdown extends React.Component<Props, State> {
  public state = { 
    isOpen: false,
    adults: 0,
    childs: 0,
    babies: 0,
  };

  render() {
    const { isOpen } = this.state;

    return (
      <Dropdown
        label="dropdown with form"
        placeholder={this.getDropdownTitle()}
        isOpen={isOpen}
        onChange={this.handleDropdownIsOpenState}
      >
        <Form
          onSubmit={this.handleFormSubmit}
          render={this.renderForm}
        />
      </Dropdown> 
    );
  }

  @autobind
  private renderForm({ handleSubmit }: FormRenderProps) {
    return (
      <form onSubmit={handleSubmit} className={b()}>
        <div className={b('field')}>
          <InputNumberField
            name="adults"
            label="Adults"
            min={0}
            max={4}
            initialValue={0}
          />
        </div>
        <div className={b('field')}>
          <InputNumberField
            name="childs"
            label="Childen"
            min={0}
            max={5}
            initialValue={0}
          />
        </div>
        <div className={b('field')}>
          <InputNumberField
            name="babies"
            label="Babies"
            min={0}
            max={2}
            initialValue={0}
          />
        </div>
        <div className={b('button')}>
          <TextButton type="submit" text="Apply guests" />
        </div>
      </form>
    );
  }

  private getDropdownTitle() {
    const { adults, childs, babies } = this.state;
    if (!adults && !childs && !babies) { return 'Fill your family'; }
    return `${adults} adults, ${childs} children, ${babies} babies`;
  }

  @autobind
  handleFormSubmit(values: { adults: number; childs: number; babies: number; }) {
    this.setState({ 
      isOpen: false, 
      ...values,
    });
  }

  @autobind
  handleDropdownIsOpenState() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }
}

export { GuestsDropdown, Props };