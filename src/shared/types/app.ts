import { ReactElement } from 'react';
import { RouteProps } from 'react-router';
import { Store, Reducer, ActionCreator, Action } from 'redux';
import { SagaIterator } from 'redux-saga';

import * as features from 'features';
import { Api } from 'services/api/Api';

export abstract class IModule {
  public getRoutes?(): ReactElement<RouteProps> | Array<ReactElement<RouteProps>>;
}

export interface IFeature {
  entry: IFeatureEntry;
}

export interface IAppData {
  modules: IModule[];
  services: IFeature[];
  features: IFeature[];
  store: Store<IAppReduxState>;
}

export interface IDependencies {
  api: Api;
}

export interface IReduxEntry {
  reducers?: { [key in keyof IAppReduxState]?: Reducer<IAppReduxState[key]> };
  sagas?: Array<(deps: IDependencies) => () => SagaIterator>;
}

export interface IFeatureEntry {
  containers?: Record<string, React.ComponentType<any>>;
  actionCreators?: Record<string, ActionCreator<Action>>;
  selectors?: Record<string, (state: any, ...args: any[]) => any>;
  reduxEntry?: IReduxEntry;
}

export interface IAppReduxState {
  // services
  // features
  profile: features.profile.namespace.IReduxState;
}

export type RootSaga = (deps: IDependencies) => () => SagaIterator;

export type Lang = 'en-US' | 'ru-RU';

export type Uid = number;

export interface IAssets {
  javascript: string[];
  styles: string[];
  favicons: CheerioElement[];
}
