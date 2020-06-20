import { Reducer } from 'redux';
import { AuctionsState, AuctionsTypes } from './types';
import auctionResults from '../../../simulator/auctions';

const INITIAL_STATE: AuctionsState = {
  data: auctionResults.auctions,
  error: false,
  loading: false
}

const reducer: Reducer<AuctionsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuctionsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
      case AuctionsTypes.LOAD_SUCCESS:
        return { 
          ...state,
          data: action.payload.data,
          loading: false,
          error: false
        };
        case AuctionsTypes.LOAD_FAILURE:
          return { ...state, loading: false, error: true, data: [] };
        case AuctionsTypes.SEARCH_ITEM:
          return action.payload === '' ? INITIAL_STATE : { 
            ...state,
            data: state.data.filter(item => 
              (item.itemName.search(action.payload) !== -1) ? true : false
            )
          };
    default:
      return state;
  }
}

export default reducer;