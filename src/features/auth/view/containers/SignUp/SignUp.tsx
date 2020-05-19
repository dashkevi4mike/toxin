import React from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';
import { FormRenderProps, Form } from 'react-final-form';
import { autobind } from 'core-decorators';
import { Link } from 'react-router-dom';

import { routes } from 'modules/routes';
import { getFieldWithComponent } from 'shared/helpers/react';
import { Button, EmailInput, PasswordInput, Input, ToggleButton } from 'shared/view/elements';
import { IAppReduxState } from 'shared/types/app';
import { SignUpPayload } from 'shared/types/models';
import { ICommunication } from 'shared/types/redux';
import { actionCreators, selectors } from './../../../redux';

import './SignUp.scss';

interface IStateProps {
  signUpComm: ICommunication;
}

type IActionProps = typeof mapDispatch;

type IProps = IStateProps & IActionProps;

function mapState(state: IAppReduxState): IStateProps {
  return {
    signUpComm: selectors.selectCommunication(state, 'signUp'),
  };
}

const mapDispatch = {
  signUp: actionCreators.signUp,
};

const b = block('sign-up');

const TextField = getFieldWithComponent(Input);
const EmailField = getFieldWithComponent(EmailInput);
const PasswordField = getFieldWithComponent(PasswordInput);
const ToggleField = getFieldWithComponent(ToggleButton);

class SignUpComponent extends React.PureComponent<IProps> {
  render() {
    return (
      <div className={b()}>
        <h1 className={b('title')}>Sign Up</h1>
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
          <TextField
            name="name"
            placeholder="Name"
            validateOnChange
            isRequired
          />
        </div>
        <div className={b('field')}>
          <TextField
            name="lastName"
            placeholder="Last name"
            validateOnChange
            isRequired
          />
        </div>
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
        <div className={b('field')}>
          <ToggleField
            label="Subscribe to special offers."
            initialChecked={false}
            name="news"
          />
        </div>
        <div className={b('submit-button')}>
          <Button onClick={handleSubmit} theme="filled" type="button" fullWidth>Sign Up</Button>
        </div>
        <div className={b('links')}>
          <span></span>
          <Link
            to={routes.auth["sign-in"].getRedirectPath()}
            key={routes.auth["sign-in"].getElementKey()}
            className={b('link')}
          >
            <Button theme="transparent" type="button">Sign In</Button>
          </Link>
        </div>
      </form>
    );
  }

  @autobind
  private handleFormSubmit(values:  SignUpPayload) {
    const { signUp } = this.props;

    signUp(values);
  }
}

const connectedComponent = connect(mapState, mapDispatch)(SignUpComponent);

export { connectedComponent as SignUp, SignUpComponent, IProps as ISignUpProps };
