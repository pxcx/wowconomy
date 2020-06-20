import styled from "styled-components";

import { TableCell, TableCellTitle } from "../../styles/global";

export const appearDuration = 500;
export const transitionName = `example`;

export const Container = styled.div`
  margin: 20px;
  height: 71vh;
  overflow-y: auto;
  padding: 0 14px;
  ::-webkit-scrollbar-thumb {
    background: #666;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #ddd;
  }

  ::-webkit-scrollbar-thumb {
    background: #666;
  }
`;

export const LargeCell = styled(TableCell)`
  overflow: hidden;
  font-size: 18px;
  width: 54%;
`;

export const SmallCell = styled(TableCell)`
  text-align: center;
  overflow: hidden;
  font-size: 18px;
  width: 15%;
`;

export const LargeCellTitle = styled(TableCellTitle)`
  text-align: center;
  width: 69%;
`;

export const SmallCellTitle = styled(TableCellTitle)`
  text-align: center;
  width: 15%;
`;

export const ResultCard = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 12px;
  margin: 25px auto;
  border-radius: 5px;
  box-shadow: 0px 0px 12px 0.5px #ccc;
  display: flex;
  transition: box-shadow 1s, color 1s;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    box-shadow: 0px 0px 12px 0.5px #333;
    cursor: pointer;
  }
`;

export const Details = styled.div`
  padding: 0px 5px;
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Large = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  align-self: flex-start;
`;

export const Small = styled.div`
  width: 100%;
  margin-top: 5px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
`;

export const Text = styled.div`
  flex-grow: 1;
`;

export const Price = styled(Text)`
  text-align: right;
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
`;
