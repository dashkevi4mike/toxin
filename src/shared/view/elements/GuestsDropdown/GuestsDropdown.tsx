import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';
import { Form, FormRenderProps } from 'react-final-form';

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
}

class GuestsDropdown extends React.Component<Props, State> {
  public state = { isOpen: false };

  render() {
    const { isOpen } = this.state;

    return (
      <Dropdown
        label="dropdown with form"
        placeholder="Fill your family"
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
          <NumberInput
            name="adults"
            label="Adults"
            min={1}
            max={4}
            initialValue={1}
          />
        </div>
        <div className={b('field')}>
          <NumberInput
            name="childen"
            label="Children"
            min={0}
            max={5}
            initialValue={0}
          />
        </div>
        <div className={b('field')}>
          <NumberInput
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

  @autobind
  handleFormSubmit(values: { adults: number; children: number; babies: number; }) {
    const { onChange } = this.props;
    this.setState({ isOpen: false });
    if (onChange) {onChange(values); }
  }

  @autobind
  handleDropdownIsOpenState() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }
}

export { GuestsDropdown, Props };