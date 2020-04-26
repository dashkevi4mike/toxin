import React from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';
import { FormRenderProps, Form } from 'react-final-form';
import { autobind } from 'core-decorators';
import { Link } from 'react-router-dom';

import { routes } from 'modules/routes';
import { getFieldWithComponent } from 'shared/helpers/react';
import { Button, EmailInput, PasswordInput, TextButton } from 'shared/view/elements';
import { IAppReduxState } from 'shared/types/app';
import { ICommunication } from 'shared/types/redux';
import { actionCreators, selectors } from './../../../redux';

import * as NS from '../../../namespace';

import './SignIn.scss';

interface IStateProps {
  signInComm: ICommunication;
}

type IActionProps = typeof mapDispatch;

type IProps = IStateProps & IActionProps;

function mapState(state: IAppReduxState): IStateProps {
  return {
    signInComm: selectors.selectCommunication(state, 'signIn'),
  };
}

const mapDispatch = {
  signIn: actionCreators.signIn,
};

const b = block('sign-in');

const EmailField = getFieldWithComponent(EmailInput);
const PasswordField = getFieldWithComponent(PasswordInput);

class SignInComponent extends React.PureComponent<IProps> {
  render() {
    return (
      <div className={b()}>
        <h1 className={b('title')}>Sign In</h1>
        <Form
          onSubmit={this.handleFormSubmit}
          render={this.renderForm}
        />
      </div>
    )
  }

  private renderForm({ handleSubmit }: FormRenderProps) {
    return (
      <form onSubmit={handleSubmit}>
        <div className={b('field')}>
          <EmailField
            name="email"
            placeholder="Email"
            validateOnChange
            isRequired
          />
        </div>
        <div className={b('field')}>
          <PasswordField
            name="password"
            placeholder="Password"
            validateOnChange
            isRequired
          />
        </div>
        <div className={b('submit-button')}>
          <Button onClick={handleSubmit} theme="filled" type="button" fullWidth>Sign In</Button>
        </div>
        <div className={b('links')}>
          <Link
            to={routes.auth["reset-password"].getRedirectPath()}
            key={routes.auth["reset-password"].getElementKey()}
            className={b('link')}
          >
            <TextButton
              type="button" text="Reset password"
            />
          </Link>
          <Link
            to={routes.auth["sign-up"].getRedirectPath()}
            key={routes.auth["sign-up"].getElementKey()}
            className={b('link')}
          >
            <Button theme="transparent" type="button">Create account</Button>
          </Link>
        </div>
      </form>
    );
  }

  @autobind
  private handleFormSubmit(values: NS.SignInPayload) {
    const { signIn } = this.props;

    signIn(values);
  }
}

const connectedComponent = connect(mapState, mapDispatch)(SignInComponent);

export { connectedComponent as SignIn, SignInComponent, IProps as IProfileEditProps };
