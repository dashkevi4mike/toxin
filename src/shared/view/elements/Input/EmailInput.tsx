
import React from 'react';

import { makeEmailValidator } from 'shared/helpers/validators';

import { Props as InputProps, Input } from './Input';

type OwnProps = {};

type Props = OwnProps & Omit<InputProps, 'validators'>;;

export const validators = [makeEmailValidator('Invalid email')];

class EmailInput extends React.Component<Props> {
  
  render() {
    return (
      <Input
        {...this.props}
        validators={validators}
      />
    );
  }
}

export { EmailInput, Props };