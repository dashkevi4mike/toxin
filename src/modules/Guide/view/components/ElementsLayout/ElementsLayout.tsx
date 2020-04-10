import React from 'react';
import block from 'bem-cn';

import { Layout } from '../../../../shared';

import { routes } from 'modules/routes';

import './ElementsLayout.scss';

type Props = {};

const b = block('elements-layout');

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

function ElementsLayoutComponent(_props: Props) {

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

export { ElementsLayoutComponent as ElementsLayout, Props as ElementsLayoutProps };
