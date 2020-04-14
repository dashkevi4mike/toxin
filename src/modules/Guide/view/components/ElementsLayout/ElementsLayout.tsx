import React from 'react';
import block from 'bem-cn';

import { Layout } from '../../../../shared';

import { routes } from 'modules/routes';

import { Input, EmailInput, PasswordInput, Checkbox, RadioGroup } from 'shared/view/elements';

import './ElementsLayout.scss';

type Props = {};

const b = block('elements-layout');

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

const radioButtons = {
  name: 'male',
  options: [
    { label: 'Women', value: 'women', name: 'male' },
    { label: 'Men', value: 'men', name: 'male' },
  ],
  initialValue: 'men',
  onChange: () => {},
};

function ElementsLayoutComponent(_props: Props) {

  return (
    <Layout headerLinks={headerLinks} footerLinks={footerLinks}>
      <div className={b()}>
        <div className={b('inner')}>
          <div className={b('column')}>
            <div className={b('element')}>
              <Input
                id="name"
                name="name"
                label="text field"
                placeholder="Name"
                isRequired
                onChange={()=>{}}
              />
            </div>
            <div className={b('element')}>
              <EmailInput
                id="email"
                name="email"
                label="email field"
                placeholder="Email"
                isRequired
                onChange={()=>{}}
              />
            </div>
            <div className={b('element')}>
              <PasswordInput
                id="password"
                name="password"
                label="Password field"
                placeholder="Password"
                isRequired
                onChange={()=>{}}
              />
            </div>
          </div>
          <div className={b('column')}>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Checkbox</h3>
              <Checkbox
                label="Pets allowed"
                id="pets"
                initialChecked={false}
                name="pets"
              />
            </div>
            <div className={b('element')}>
              <h3 className={b('group-title')}>Radio buttons</h3>
              <RadioGroup
                {...radioButtons}
              />
            </div>
          </div>
          <div className={b('column')}>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { ElementsLayoutComponent as ElementsLayout, Props as ElementsLayoutProps };
