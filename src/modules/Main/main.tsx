import React from 'react';
import { Route } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { IntroLayout } from './view/components/IntroLayout/IntroLayout';

const Main: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.intro.getElementKey()}
        path={routes.intro.getRoutePath()}
        component={IntroLayout}
      />
    );
  },
};

export { Main };
