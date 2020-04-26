import { combineReducers } from 'redux';

import { communicationReducer } from './communications';
import * as NS from '../../namespace';

export const reducer = combineReducers<NS.IReduxState>({
  communications: communicationReducer,
});
