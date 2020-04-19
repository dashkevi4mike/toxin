import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import ReactMaskedInput from 'react-text-mask';

import { composeValidators, makeRequired, Validator } from 'shared/helpers/validators';

import './Input.scss';

const b = block('input');

type Props = {
  name: string;
  id?: string;
  placeholder: string;
  label: string;
  mask?: Array<RegExp | string>;
  onChange: (value: string | number) => void;
  validateOnChange: boolean;
  validators?: Validator[];
  type?: string;
  value?: string;
  icon?: React.ReactElement;
  error?: string;
  onIconClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  isRequired?: boolean;
}

type State = {
  error: string | undefined;
}

class Input extends React.Component<Props, State> {
  public state = { error: undefined };

  componentDidUpdate(prevProps: Props) {
    const { value } = this.props;
    if (prevProps.value !== value && value) {
      this.validate(value);
    }
  }

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
      value,
      mask
    } = this.props;
    if (mask) {
      return (
        <ReactMaskedInput
          mask={mask}
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
  private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
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
    const { validators = [], isRequired } = this.props;
    let allValidators: Validator[] = isRequired ? validators.concat([ makeRequired()]) : validators;
    const validator = composeValidators(allValidators);
    this.setState({ error: validator(value) });
  }
}

export { Input, Props };