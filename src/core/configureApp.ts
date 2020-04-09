
import * as allFeatures from 'features';
import * as allModules from 'modules';
// import * as allServices from 'services';
import { ReducersMap } from 'shared/types/redux';
import { IAppData, IFeature, IModule,
  RootSaga, IAppReduxState, IReduxEntry } from 'shared/types/app';

import { configureStore, createReducer } from './configureStore';
import { configureDeps } from './configureDeps';

type ReducerName = keyof IAppReduxState;

function configureApp(): IAppData {
  /* Prepare main app elements */
  const features: IFeature[] = Object.values(allFeatures);
  const modules: IModule[] = Object.values(allModules);
  const services: IFeature[] = Object.values([]);

  const connectedSagas: RootSaga[] = [];
  const connectedReducers: Partial<ReducersMap<IAppReduxState>> = {};

  const { runSaga, store } = configureStore();
  const dependencies = configureDeps();

  features.forEach((feature: IFeature) => {
    if (feature.entry && feature.entry.reduxEntry) {
      connectEntryToStore(feature.entry.reduxEntry);
    }
  });

  // services.forEach((service: IFeature) => {
  //   if (service.entry && service.entry.reduxEntry) {
  //     connectEntryToStore(service.entry.reduxEntry);
  //   }
  // });

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

    if (sagas) {
      sagas.forEach((saga: RootSaga) => {
        if (!connectedSagas.includes(saga) && runSaga) {
          runSaga(saga(dependencies));
          connectedSagas.push(saga);
        }
      });
    }
  }

  return { modules, store, features, services };
}

export { configureApp };
