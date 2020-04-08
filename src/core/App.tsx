import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import 'normalize.css';

import { IAppData } from 'shared/types/app';

import { getRoutes } from './routes';

function ClientApp({ modules, store }: IAppData) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {getRoutes(modules)}
      </BrowserRouter>
    </Provider>
  );
}

export const App = hot(ClientApp);

