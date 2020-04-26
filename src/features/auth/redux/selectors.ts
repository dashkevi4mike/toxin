import { IAppReduxState } from 'shared/types/app';
import { ICommunication } from 'shared/types/redux';
import { IReduxState } from '../namespace';

function selectFeatureState(state: IAppReduxState) {
  return state.auth;
}

export function selectCommunication(state: IAppReduxState, communicationName: keyof IReduxState['communications']): ICommunication {
  return selectFeatureState(state).communications[communicationName];
}