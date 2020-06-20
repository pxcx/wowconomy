import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 500px;
`;

export const Row = styled.div `
  padding: 10px 0;
  text-align: center;
`;

export const SearchInput = styled.input `
  padding: 10px;
  width: 90vw;
  max-width: 500px;
  box-shadow: 0px 0px 10px 0.5px #BBB;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
`;