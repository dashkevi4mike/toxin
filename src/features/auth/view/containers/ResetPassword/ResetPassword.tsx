import React from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';
import { FormRenderProps, Form } from 'react-final-form';
import { autobind } from 'core-decorators';
import { Link } from 'react-router-dom';

import { routes } from 'modules/routes';
import { getFieldWithComponent } from 'shared/helpers/react';
import { Button, EmailInput } from 'shared/view/elements';
import { IAppReduxState } from 'shared/types/app';
import { ICommunication } from 'shared/types/redux';
import { ResetPasswordPayload } from 'shared/types/models';
import { actionCreators, selectors } from './../../../redux';

import './ResetPassword.scss';

interface IStateProps {
  resetPasswordComm: ICommunication;
}

type IActionProps = typeof mapDispatch;

type IProps = IStateProps & IActionProps;

function mapState(state: IAppReduxState): IStateProps {
  return {
    resetPasswordComm: selectors.selectCommunication(state, 'resetPassword'),
  };
}

const mapDispatch = {
  resetPassword: actionCreators.resetPassword,
};

const b = block('reset-password');

const EmailField = getFieldWithComponent(EmailInput);

class ResetPasswordComponent extends React.PureComponent<IProps> {
  render() {
    return (
      <div className={b()}>
        <h1 className={b('title')}>Reset password</h1>
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
        <div className={b('submit-button')}>
          <Button onClick={handleSubmit} theme="filled" type="button" fullWidth>Submit</Button>
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
  private handleFormSubmit(values:  ResetPasswordPayload) {
    const { resetPassword } = this.props;

    resetPassword(values);
  }
}

const connectedComponent = connect(mapState, mapDispatch)(ResetPasswordComponent);

export { connectedComponent as ResetPassword, ResetPasswordComponent, IProps as IResetPasswordProps };
