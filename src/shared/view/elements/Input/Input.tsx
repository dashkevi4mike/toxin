import React from 'react';
import block from 'bem-cn';
import { autobind } from 'core-decorators';

import { composeValidators, makeRequired } from 'shared/helpers/validators';

import './Input.scss';

const b = block('input');


type Props = {
  name: string;
  id?: string;
  placeholder: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  validateOnChange: boolean;
  validators?: Array<(...args: string[]) => string | undefined>;
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
        <div className={b('inner')}>
          {
            label ? (
              <label>
                <h3 className={b('label')}>{label}</h3>
                {this.renderInput()}
              </label>
            ) : this.renderInput()
          }
          { 
            icon ? (
              <div className={b('icon')} onClick={onIconClick}>{icon}</div>
            ) : null 
          }
        </div>
        <p className={b('error')}>{this.state.error || error || '' }</p>
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
    } = this.props;
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
      />
    );
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
    if (onChange) { onChange(event) }
  }

  @autobind
  private handleFocus() {
    const { onFocus } = this.props;
    if (onFocus) { onFocus() }
  }

  private validate(value: string) {
    const { isRequired, validators } = this.props;
    const ownValidators = isRequired ? [ makeRequired() ] : [];
    const validator = composeValidators(validators ? ownValidators.concat([...validators]) : ownValidators);
    this.setState({ error: validator(value)});
  }
}

export { Input, Props };