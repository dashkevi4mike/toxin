import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import ReactMaskedInput from 'react-text-mask';

import { composeValidators, makeRequired, makeCardValidator, makeDateValidator, Validator } from 'shared/helpers/validators';

import './Input.scss';

const b = block('input');


type MaskType = 'visa' | 'date';

export const validatorsByMaskType: { [key in MaskType]: Validator[]} = {
  visa: [ makeCardValidator('Invalid card') ],
  date: [ makeDateValidator('Invalid date') ],
};

const maskByType: { [key in MaskType]: Array<RegExp | string>} = {
  visa: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
  date: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/],
};


type Props = {
  name: string;
  id?: string;
  placeholder: string;
  label: string;
  maskType?: MaskType;
  onChange: (value: string | number) => void;
  validateOnChange: boolean;
  validators?: Validator[];
  type?: string;
  value?: string;
  icon?: React.ReactElement;
  error?: string;
  innerRef?: any;
  isRequired?: boolean;
  onIconClick?: () => void;
  validate?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

type State = {
  error: string | undefined;
}

class Input extends React.Component<Props, State> {
  public state = { error: undefined };

  render() {
    const {
      label, error, icon, onIconClick,
    } = this.props;
    return (
      <div className={b()}>
        <label className={b('label')}>
          <h3 className={b('label-text')}>{label}</h3>
          <div className={b('input-wrapper')}>
            {this.renderInput()}
            { 
              icon ? (
                <div className={b('icon')} onClick={onIconClick}>{icon}</div>
              ) : null 
            }
          </div>
        </label>
        <p className={b('error')}>{this.state.error || error || ''}</p>
      </div>
    );
  }

  private renderInput() {
    const {
      name,
      type,
      placeholder,
      id,
      innerRef,
      value,
      maskType
    } = this.props;
    if (maskType) {
      return (
        <ReactMaskedInput
          mask={maskByType[maskType]}
          type="text"
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className={b('input')}
        />
      )
    } else {
      return (
        <input
          className={b('input')}
          name={name}
          id={id}
          ref={innerRef}
          placeholder={placeholder}
          type={type ? type : 'text'}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={value}
        />
      );
    }
  }

  @autobind
  private handleBlur(event: React.ChangeEvent<HTMLInputElement>) {
    const { onBlur } = this.props;
    this.validate(event.currentTarget.value);
    if (onBlur) { onBlur() }
  }

  @autobind
  private handleChange(event: any) {
    const { onChange, validateOnChange } = this.props;
    if (validateOnChange) { this.validate(event.currentTarget.value) };
    if (onChange) { onChange(event.currentTarget.value) }
  }

  @autobind
  private handleFocus() {
    const { onFocus } = this.props;
    if (onFocus) { onFocus() }
  }

  private validate(value: string) {
    const { isRequired, validators, maskType } = this.props;
    let allValidators: Validator[] = [];
    if (isRequired) {
      allValidators = allValidators.concat([ makeRequired() ]);
    }
    if (validators) {
      allValidators = allValidators.concat(validators);
    }
    if (maskType) {
      allValidators = allValidators.concat(validatorsByMaskType[maskType]);
    }
    const validator = composeValidators(allValidators);
    this.setState({ error: validator(value)});
  }
}

export { Input, Props };