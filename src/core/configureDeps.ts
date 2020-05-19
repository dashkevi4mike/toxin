import { IDependencies } from 'shared/types/app';
import { LocalStorage } from 'services/api/storage';
import { Api } from 'services/api/Api';
import { getEnvParams } from 'core/getEnvParams';

export function configureDeps(): IDependencies {
  const storage = new LocalStorage(getEnvParams().localStorageVersion);
  const api = new Api(storage);

  return { api };
}
