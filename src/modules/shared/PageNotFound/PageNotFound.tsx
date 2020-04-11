import React from 'react';
import block from 'bem-cn';

import { Layout } from '../Layout/Layout';

import { Logo, SocialLinks } from 'shared/view/elements';

import { routes } from 'modules/routes';

import './PageNotFound.scss';

type Props = {};

const b = block('page-not-found');

const headerLinks = [
  { title: 'Home', href: '' },
  { title: 'Guide', href: routes.guide.getRedirectPath(), links: [
    { title: 'Colors & Headlines', href: routes.guide["colors-and-headlines"].getRedirectPath() },
    { title: 'Elements', href: routes.guide.elements.getRedirectPath() },
    { title: 'Components', href: routes.guide.components.getRedirectPath() }
  ]},
  { title: 'Careers', href: '' },
  { title: 'News', href: '' },
];

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

function PageNotFound(_props: Props) {

  return (
    <Layout headerLinks={headerLinks} footerLinks={footerLinks}>
      <div className={b()}>
        <div className={b('inner')}>
          <Logo />
          <p className={b('message')}>
            Sorry, page not found. Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.
          </p>
          <SocialLinks />
        </div>
      </div>
    </Layout>
  );
}
;

export { PageNotFound, Props };
