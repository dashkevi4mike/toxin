import React, { createRef } from 'react';
import block from 'bem-cn';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

import { IAppReduxState } from 'shared/types/app';
import { IProfile } from 'shared/types/models';

import { ProfileAvatar } from '../../components';
import { selectors } from '../../../redux';
import './ProfilePreview.scss';

interface IState {
  isOpen: boolean;
}

interface IOwnProps {
  onEditClick(): void;
}

interface IStateProps {
  profile: IProfile;
}

type IProps = IOwnProps & IStateProps;

const b = block('profile-preview');

function mapState(state: IAppReduxState): IStateProps {
  return {
    profile: selectors.selectProfile(state),
  };
}

class ProfilePreviewComponent extends React.PureComponent<IProps, IState> {
  public state: IState = {
    isOpen: false,
  };

  private blockRef = createRef<HTMLDivElement>();

  public render() {
    const { profile: { avatarURL } } = this.props;
    return (
      <div className={b()} ref={this.blockRef}>
        <div
          tabIndex={0}
          role="button img"
          className={b('avatar')}
          onClick={this.handleAvatarClick}
          onKeyPress={this.handleAvatarKeyPress}
        >
          <ProfileAvatar avatarURL={avatarURL} size="small" />
        </div>
      </div>
    );
  }

  @autobind
  private handleAvatarClick() {
    this.setState({ isOpen: true });
  }

  @autobind
  private handleAvatarKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter') {
      this.setState({ isOpen: true });
    }
  }
}

const connectedComponent = connect(mapState)(ProfilePreviewComponent);
const ProfilePreview = connectedComponent;

export { ProfilePreview, ProfilePreviewComponent, IProps as IProfilePreviewProps };
