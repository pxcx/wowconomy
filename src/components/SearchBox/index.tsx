import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as AuctionsActions from '../../store/ducks/auctions/actions';

import strings from '../../resources/strings';

import { Container, Row, SearchInput } from './styles';

// action creators
export interface DispatchProps {
  searchItem(itemName: string): void,
};

const SearchBox: React.FC<DispatchProps> = ({ searchItem }) => {
  return (
    <Container>
      <Row>{ strings.searchBox.text }</Row>
      <Row>
        <SearchInput 
          onChange={event => searchItem(event.target.value) }
          placeholder="e.g. Benediction"
        />
      </Row>
    </Container>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators(AuctionsActions, dispatch)
);

export default connect(null, mapDispatchToProps)(SearchBox);
