
import React from 'react';
import { autobind } from 'core-decorators';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { makeMinCharactersValidator } from 'shared/helpers/validators';

import { Props as InputProps, Input } from './Input';

type OwnProps = {};

type State = {
  showPassword: boolean;
}

type Props = OwnProps & Omit<InputProps, 'validators'>;

export const validators = [ makeMinCharactersValidator(8, 'Min.length is 8 symbols') ];

class PasswordInput extends React.Component<Props> {

  public state: State = {
    showPassword: false,
  };
  
  render() {
    const { showPassword } = this.state;
    return (
      <Input
        {...this.props}
        icon={this.renderIcon()}
        type={showPassword ? 'text' : 'password'}
        onIconClick={this.handleIconClick}
        validators={validators}
      />
    );
  }

  @autobind
  private handleIconClick() {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  }

  private renderIcon() {
    const { showPassword } = this.state;
    return showPassword ? <VisibilityOff /> : <Visibility />
  }
}

export { PasswordInput, Props };