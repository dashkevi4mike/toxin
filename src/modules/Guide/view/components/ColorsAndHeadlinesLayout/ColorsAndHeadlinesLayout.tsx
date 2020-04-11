import React from 'react';
import block from 'bem-cn';

import { Colors, Headlines } from 'shared/view/components';
import { Layout } from '../../../../shared';

import { routes } from 'modules/routes';
import { colors, headlines } from './data';

import './ColorsAndHeadlinesLayout.scss';

type Props = {};

const b = block('colors-and-headlines-layout');

const headerLinks = [
  { title: 'Home', href: '404' },
  { title: 'Guide', href: routes.guide["colors-and-headlines"].getRedirectPath(), links: [
    { title: 'Colors & Headlines', href: routes.guide["colors-and-headlines"].getRedirectPath() },
    { title: 'Elements', href: routes.guide.elements.getRedirectPath() },
    { title: 'Components', href: routes.guide.components.getRedirectPath() }
  ]},
  { title: 'Careers', href: '404' },
  { title: 'News', href: '404' },
]

const footerLinks = [
  { title: 'Navigation', links: [
    { title: 'About Us', href: '404' },
    { title: 'News', href: '404' },
    { title: 'Support', href: '404' },
    { title: 'Products', href: '404' },
  ]},
  { title: 'About Us', links: [
    { title: 'Who we are', href: '404' },
    { title: 'Our team', href: '404' },
    { title: 'Careers', href: '404' },
    { title: 'Investors', href: '404' },
  ]},
  { title: 'Support', links: [
    { title: 'Documentation', href: '404' },
    { title: 'Community', href: '404' },
    { title: 'Get in Touch', href: '404' },
  ]}
];

function ColorsAndHeadlinesLayoutComponent(_props: Props) {

  return (
    <Layout headerLinks={headerLinks} footerLinks={footerLinks}>
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
