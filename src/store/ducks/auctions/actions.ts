import { action } from 'typesafe-actions';
import { AuctionsTypes, Auction } from './types';

export const loadRequest = () => action(AuctionsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Auction[]) => (
  action(AuctionsTypes.LOAD_SUCCESS, { data })
);

export const loadFailure = () => action(AuctionsTypes.LOAD_FAILURE);

export const searchItem = (itemName: string) => (
  action(AuctionsTypes.SEARCH_ITEM, itemName)
);