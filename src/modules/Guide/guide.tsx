import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { ColorsAndHeadlinesLayout, ComponentsLayout, ElementsLayout } from './view/components';

const Guide: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.guide.getElementKey()}
        path={routes.guide.getRoutePath()}
        component={ColorsAndHeadlinesLayout}
      >
        <Switch>
          <Route
            key={routes.guide["colors-and-headlines"].getElementKey()}
            path={routes.guide["colors-and-headlines"].getRoutePath()}
            component={ColorsAndHeadlinesLayout}
          />
          <Route
            key={routes.guide.elements.getElementKey()}
            path={routes.guide.elements.getRoutePath()}
            component={ElementsLayout}
          />
          <Route
            key={routes.guide.components.getElementKey()}
            path={routes.guide.components.getRoutePath()}
            component={ComponentsLayout}
          />
        </Switch>
      </Route>
    );
  },
};

export { Guide };
