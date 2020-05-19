import { initialCommunicationField } from 'shared/constants';
import { IReduxState } from '../namespace';

const initial: IReduxState = {
  communications: {
    signIn: initialCommunicationField,
    signUp: initialCommunicationField,
    resetPassword: initialCommunicationField,
  },
};

export { initial };
