import React from 'react';
import block from 'bem-cn';

import { Layout } from '../../../../shared';

import { routes } from 'modules/routes';

import './ComponentsLayout.scss';

type Props = {};

const b = block('components-layout');

const links = [
  { title: 'Home', href: '' },
  { title: 'Guide', href: routes.guide.getRedirectPath(), links: [
    { title: 'Colors & Headlines', href: routes.guide["colors-and-headlines"].getRedirectPath() },
    { title: 'Elements', href: routes.guide.elements.getRedirectPath() },
    { title: 'Components', href: routes.guide.components.getRedirectPath() }
  ]},
  { title: 'Careers', href: '' },
  { title: 'News', href: '' },
]

function ComponentsLayoutComponent(_props: Props) {

  return (
    <Layout headerLinks={links}>
      <div className={b()}>
        <div className={b('inner')}>
          <div className={b('row')}>
          </div>
        </div>
      </div>
    </Layout>
  );
}
;

export { ComponentsLayoutComponent as ComponentsLayout, Props as ComponentsLayoutProps };
