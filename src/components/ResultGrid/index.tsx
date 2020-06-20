import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";

import { Auction } from "../../store/ducks/auctions/types";
import * as AuctionsActions from "../../store/ducks/auctions/actions";

import strings from "../../resources/strings";

import { CenterText, Icon, SilverIcon, GoldIcon } from "../../styles/global";
import {
  ResultCard,
  Container,
  Details,
  Large,
  Small,
  Price,
  Text,
} from "./styles";

// props connected by redux
export interface StateProps {
  results: Auction[];
}
// action creators
export interface DispatchProps {
  searchItem(itemName: string): void;
}

type Props = StateProps & DispatchProps;

const ResultGrid: React.FC<Props> = ({ results, searchItem }) => {
  // formats and display in gold and silver an price given in copper
  function AuctionPrice(price: number) {
    const moneyFormat = { maximumFractionDigits: 2, minimumFractionDigits: 2 };
    const fullPriceInGold = (price / 10000).toLocaleString(
      "en-US",
      moneyFormat
    );
    const fullPrice = fullPriceInGold.split(".");

    return (
      <Price>
        {fullPrice[0] !== "0" ? (
          <div>
            {fullPrice[0]}
            <GoldIcon />
          </div>
        ) : null}
        {fullPrice[1] !== "00" ? (
          <div>
            {fullPrice[1]}
            <SilverIcon />
          </div>
        ) : null}
      </Price>
    );
  }

  // render
  return (
    <Container>
      {results.length === 0 ? (
        <Large>
          <CenterText>{strings.resultGrid.emptyResults}</CenterText>
        </Large>
      ) : (
        results.map((result) => (
          <ResultCard>
            <Icon src={result.itemIcon} />
            <Details>
              <Large>{result.itemName}</Large>
              <Small>
                <Text>Quantity: {result.quantity} </Text>
                {AuctionPrice(result.unitPrice)}
              </Small>
            </Details>
          </ResultCard>
        ))
      )}
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  results: state.auctions.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(AuctionsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResultGrid);
