import React from 'react';
import block from 'bem-cn';

import { Colors } from 'shared/view/components';

import { Layout } from '../../../../shared';
import './GuideLayout.scss';

type IProps = {};

const b = block('guide-layout');

function GuideLayoutComponent(_props: IProps) {

  return (
    <Layout>
      <div className={b()}>
        <Colors />
      </div>
    </Layout>
  );
}
;

export { GuideLayoutComponent as GuideLayout, IProps as IGuideLayoutProps };
