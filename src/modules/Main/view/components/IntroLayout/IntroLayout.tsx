import React from 'react';
import block from 'bem-cn';

import { Layout } from '../../../../shared';

import { routes } from 'modules/routes';

import './IntroLayout.scss';

type Props = {};

const b = block('intro-layout');

const headerLinks = [
  { title: 'Home', href: '404' },
  { title: 'Guide', href: routes.guide["colors-and-headlines"].getRedirectPath(), links: [
    { title: 'Colors & Headlines', href: routes.guide["colors-and-headlines"].getRedirectPath() },
    { title: 'Elements', href: routes.guide.elements.getRedirectPath() },
    { title: 'Components', href: routes.guide.components.getRedirectPath() }
  ]},
  { title: 'Careers', href: '404' },
  { title: 'News', href: '404' },
];

const footerLinks = [
  { 
    title: 'Navigation', 
    mobileInvisible: true,
    links: [
      { title: 'About Us', href: '404' },
      { title: 'News', href: '404' },
      { title: 'Support', href: '404' },
      { title: 'Products', href: '404' },
    ]
  },
  { 
    title: 'About Us',
    mobileInvisible: false,
    links: [
      { title: 'Who we are', href: '404' },
      { title: 'Our team', href: '404' },
      { title: 'Careers', href: '404' },
      { title: 'Investors', href: '404' },
    ]
  },
  { 
    title: 'Support',
    mobileInvisible: false,
    links: [
      { title: 'Documentation', href: '404' },
      { title: 'Community', href: '404' },
      { title: 'Get in Touch', href: '404' },
    ]
  }
];

function IntroLayoutComponent(_props: Props) {

  return (
    <Layout headerLinks={headerLinks} footerLinks={footerLinks}>
      <div className={b()}>
        <div className={b('inner')}>
          
        </div>
      </div>
    </Layout>
  );
};

export { IntroLayoutComponent as IntroLayout, Props as IntroLayoutProps };
