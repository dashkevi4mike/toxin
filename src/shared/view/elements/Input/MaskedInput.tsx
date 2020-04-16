import React from 'react';
import ReactMaskedInput from 'react-text-mask';

import { Input, Props as InputProps } from './Input';

import { makeCardValidator, makeDateValidator } from 'shared/helpers/validators';

type MaskType = 'visa' | 'date';

type Props = InputProps & {
  maskType: MaskType;
};

export const validatorsByMaskType: { [key in MaskType]: Array<(...args: string[]) => string | undefined>} = {
  visa: [ makeCardValidator('Invalid card') ],
  date: [ makeDateValidator('Invalid date') ],
};

const maskByType: { [key in MaskType]: Array<RegExp | string>} = {
  visa: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
  date: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/],
};

class MaskedInput extends React.PureComponent<Props> {
  public render() {
    const { maskType } = this.props;
    const validators = validatorsByMaskType[maskType];

    return (
      <ReactMaskedInput
        mask={maskByType[maskType]}
        {...this.props}
        render={(ref, props) => (<Input {...props} innerRef={ref} validators={validators} />)}
      />
    );
  }

}

export { MaskedInput };
