import React from 'react';
import block from 'bem-cn';

import { entry as profileEntry } from 'features/profile/entry';

import { Layout } from '../../../../shared';
import './ProfileLayout.scss';

type IProps = {};

const ProfileEdit = profileEntry.containers.ProfileEdit;

const b = block('profile-layout');

function ProfileLayoutComponent(_props: IProps) {

  return (
    <Layout title={'dd'}>
      <div className={b()}>
        <ProfileEdit />
      </div>
    </Layout>
  );
}
;

export { ProfileLayoutComponent as ProfileLayout, IProps as IProfileLayoutProps };
