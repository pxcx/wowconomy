import styled, { createGlobalStyle } from 'styled-components';

// global style
export default createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: ${props => props.theme.colors.background};
  }
`;

// container for app
export const AppContainer = styled.div `
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  font-family: 'Roboto', sans-serif;
`;

// default button
export const Button = styled.button `
  border: 0px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.invertedText};
  padding: 10px;
  margin: 15px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 0px 10px 0.5px #666;

  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

// centralized text
export const CenterText = styled.p `
  text-align: center;
`;

// table container
export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.primary};
`;

// table row
export const TableRow = styled.div `
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.primary};
  border-top: 0;
  border-left: 0;

  &:hover {
    color: ${props => props.theme.colors.invertedText};
    background: ${props => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

// table cell
export const TableCell = styled.div `
  padding: 5px;
  border-left: 1px solid ${props => props.theme.colors.primary};
  flex-grow: 1;
`;

export const TableCellTitle = styled(TableCell) `
  color: ${props => props.theme.colors.invertedText};
  background: ${props => props.theme.colors.primary};
`;

// icon
export const Icon = styled.img `
  width: 64px;
  height: 64px;
  margin-right: 10px;
  vertical-align: top;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0.5px #555;
`;

// money icon
export const MoneyIcon = styled.img `
  width: 14px;
  height: 14px;
  margin: -1px 5px;
  border-radius: 100px;
  box-shadow: 2px 2px 3px 0.5px #666;
`;

export const GoldIcon = styled(MoneyIcon) `
  background-color: gold;
`;

export const SilverIcon = styled(MoneyIcon) `
  
  background-color: silver;
`;
