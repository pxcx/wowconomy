import { createStore, Store } from 'redux';
import { AuctionsState } from './ducks/auctions/types';
import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  auctions: AuctionsState
};

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;