
import * as allModules from 'modules';
import { ReducersMap } from 'shared/types/redux';
import { IAppData, IModule, RootSaga, IAppReduxState, IReduxEntry } from 'shared/types/app';

import { configureStore, createReducer } from './configureStore';
import { configureDeps } from './configureDeps';

type ReducerName = keyof IAppReduxState;

function configureApp(data?: IAppData): IAppData {
  /* Prepare main app elements */
  const modules: IModule[] = Object.values(allModules);

  if (data) {
    return { ...data, modules };
  }

  const connectedSagas: RootSaga[] = [];
  const connectedReducers: Partial<ReducersMap<IAppReduxState>> = {};

  const { runSaga, store } = configureStore();
  const dependencies = configureDeps();

  modules.forEach((module: IModule) => {
    if (module.getReduxEntry) {
      connectEntryToStore(module.getReduxEntry());
    }
  });

  function connectEntryToStore({ reducers, sagas }: IReduxEntry) {
    if (!store) {
      throw new Error('Cannot find store, while connecting module.');
    }

    if (reducers) {
      const keys = Object.keys(reducers) as ReducerName[];
      const isNeedReplace = keys.reduce(<K extends ReducerName>(acc: boolean, key: K) => {
        const featureReducer = reducers[key];
        if (!connectedReducers[key] && featureReducer) {
          connectedReducers[key] = featureReducer;
          return true;
        }
        return acc || false;
      }, false);

      if (isNeedReplace) {
        store.replaceReducer(createReducer(connectedReducers as ReducersMap<IAppReduxState>));
      }
    }

    if (sagas && __CLIENT__) {
      sagas.forEach((saga: RootSaga) => {
        if (!connectedSagas.includes(saga) && runSaga) {
          runSaga(saga(dependencies));
          connectedSagas.push(saga);
        }
      });
    }
  }

  return { modules, store };
}

export { configureApp };
