import React from 'react';
import { Route } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { GuideLayout } from './view/components';

const Guide: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.guide.getElementKey()}
        path={routes.guide.getRoutePath()}
        component={GuideLayout}
      />
    );
  },
};

export { Guide };
