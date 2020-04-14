import React from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';
import { Form, FormRenderProps } from 'react-final-form';
import { autobind } from 'core-decorators';

// import { Button } from 'shared/view/elements';
import { IAppReduxState } from 'shared/types/app';
import { IProfile } from 'shared/types/models';
import { ProfileAvatar } from '../../components';
import { IProfileEditFormFields } from '../../../namespace';
import { actionCreators, selectors } from './../../../redux';

import './ProfileEdit.scss';

interface IStateProps {
  profile: IProfile;
}

type IActionProps = typeof mapDispatch;

type IProps = IStateProps & IActionProps;

function mapState(state: IAppReduxState): IStateProps {
  return {
    profile: selectors.selectProfile(state),
  };
}

const mapDispatch = {
  saveProfile: actionCreators.saveProfile,
};

const b = block('profile-edit');

class ProfileEditComponent extends React.PureComponent<IProps> {
  public render() {
    const { profile } = this.props;
    return (
      <Form
        onSubmit={this.handleFormSubmit}
        initialValues={profile}
        render={this.renderForm}
        subscription={{}}
      />
    );
  }

  @autobind
  private renderForm({ handleSubmit }: FormRenderProps) {
    const { profile: { avatarURL } } = this.props;
    return (
      <form onSubmit={handleSubmit} className={b()}>
        <div className={b('avatar')}>
          <ProfileAvatar avatarURL={avatarURL} size="big" />
        </div>
        
          <div className={b('button')}>
            {/* <Button variant="outlined" type="submit">Save</Button> */}
          </div>
      </form>
    );
  }

  @autobind
  private handleFormSubmit(values: IProfileEditFormFields) {
    const { saveProfile } = this.props;
    saveProfile(values);
  }
}

const connectedComponent = connect(mapState, mapDispatch)(ProfileEditComponent);

export { connectedComponent as ProfileEdit, ProfileEditComponent, IProps as IProfileEditProps };
