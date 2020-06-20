// action types
export enum AuctionsTypes {
  LOAD_REQUEST = '@auctions/LOAD_REQUEST',
  LOAD_SUCCESS = '@auctions/LOAD_SUCCESS',
  LOAD_FAILURE = '@auctions/LOAD_FAILURE',
  SEARCH_ITEM = '@auctions/SEARCH_ITEM',
};

// data types
export interface Auction {
  id: number;
  itemId: number;
  itemName: string;
  itemIcon: string;
  unitPrice: number;
  quantity: number;
};

// state type
export interface AuctionsState {
  readonly data: Auction[];
  readonly loading: boolean;
  readonly error: boolean;
}