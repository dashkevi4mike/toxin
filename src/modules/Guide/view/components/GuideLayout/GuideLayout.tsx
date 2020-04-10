import React from 'react';
import block from 'bem-cn';

import { Colors, Headlines } from 'shared/view/components';

import { Layout } from '../../../../shared';

import { colors, headlines } from './data';
import './GuideLayout.scss';

type IProps = {};

const b = block('guide-layout');

function GuideLayoutComponent(_props: IProps) {

  return (
    <Layout>
      <div className={b()}>
        <div className={b('inner')}>
          <div className={b('row')}>
            <Colors colors={colors} />
            <Headlines headlines={headlines} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
;

export { GuideLayoutComponent as GuideLayout, IProps as IGuideLayoutProps };
