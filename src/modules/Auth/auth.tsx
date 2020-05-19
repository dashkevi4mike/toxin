import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';
import { PageNotFound } from 'modules/shared/PageNotFound/PageNotFound';

import { SignInLayout } from './view/components/SignInLayout/SignInLayout';
import { SignUpLayout } from './view/components/SignUpLayout/SignUpLayout';
import { ResetPasswordLayout } from './view/components/ResetPasswordLayout/ResetPasswordLayout';

const Auth: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.auth.getElementKey()}
        path={routes.auth.getRoutePath()}
      >
        <Switch>
          <Route
            key={routes.auth["sign-in"].getElementKey()}
            path={routes.auth["sign-in"].getRoutePath()}
            component={SignInLayout}
          />
          <Route
            key={routes.auth["sign-up"].getElementKey()}
            path={routes.auth["sign-up"].getRoutePath()}
            component={SignUpLayout}
          />
          <Route
            key={routes.auth["reset-password"].getElementKey()}
            path={routes.auth["reset-password"].getRoutePath()}
            component={ResetPasswordLayout}
          />
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Route>
    );
  },
};

export { Auth };
