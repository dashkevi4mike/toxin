import { makeFeatureEntry } from 'shared/helpers/makeFeatureEntry';

import { actionCreators, selectors, reducer, rootSaga } from './redux';
import * as containers from './view/containers';

const entry = makeFeatureEntry({
  containers,
  actionCreators,
  selectors,
  reduxEntry: {
    reducers: { auth: reducer },
    sagas: [ rootSaga ] 
  },
});

type Entry = typeof entry;

export { Entry, entry };
