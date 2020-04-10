import React from 'react';
import block from 'bem-cn';

import { Colors, Headlines } from 'shared/view/components';
import { Layout } from '../../../../shared';

import { routes } from 'modules/routes';
import { colors, headlines } from './data';

import './ColorsAndHeadlinesLayout.scss';

type Props = {};

const b = block('colors-and-headlines-layout');

const links = [
  { title: 'Home', href: '404' },
  { title: 'Guide', href: routes.guide.getRedirectPath(), links: [
    { title: 'Colors & Headlines', href: routes.guide["colors-and-headlines"].getRedirectPath() },
    { title: 'Elements', href: routes.guide.elements.getRedirectPath() },
    { title: 'Components', href: routes.guide.components.getRedirectPath() }
  ]},
  { title: 'Careers', href: '404' },
  { title: 'News', href: '404' },
]

function ColorsAndHeadlinesLayoutComponent(_props: Props) {

  return (
    <Layout headerLinks={links}>
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

export { ColorsAndHeadlinesLayoutComponent as ColorsAndHeadlinesLayout, Props as ColorsAndHeadlinesLayoutProps };
