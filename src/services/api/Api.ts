// import { autobind } from 'core-decorators';

import { HttpActions } from './HttpActions';

class Api {
  private actions: HttpActions;

  private headers = {
    get: {
      Accept: 'application/vnd.github.v3+json',
    },
  };

  constructor() {
    this.actions = new HttpActions('https://api.github.com/', this.headers);
    console.log(this.actions);
  }
}

export { Api };
