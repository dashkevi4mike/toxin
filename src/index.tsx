import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { configureApp } from 'core/configureApp';
import { App } from 'core/App';

const appData = configureApp();

function main() {
  const app = <App {...appData} />;
  ReactDOM.hydrate(
    app,
    document.getElementById('root'),
  );
}
  
main();