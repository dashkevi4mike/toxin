import { autobind } from 'core-decorators';

import { getEnvParams } from 'core/getEnvParams';
import { Auth } from './entities';
import { HttpActions } from './HttpActions';
import { IStorage } from './storage';


class Api {
  public auth: Auth;

  private actions: HttpActions;

  private headers = {
    get: {
      Accept: 'application/vnd.github.v3+json',
    },
  };

  constructor(storage: IStorage) {
    this.actions = new HttpActions(getEnvParams().apiHost, this.headers);
    this.auth = new Auth(this.actions, storage,  this.setTokenForEachApi);

    const token = this.auth.getToken();
    this.setTokenForEachApi(token);
  }

  @autobind
  private setTokenForEachApi(token: string | null) {
    const entities: Array<{ token: string | null }> = [
      this.auth,
    ];
    entities.forEach((entity) => entity.token = token);
  }

}

export { Api };
