import styled from 'styled-components';

export const Container = styled.div `
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.invertedText};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  font-size: 22px;
  box-shadow: 0px 0px 10px 0.5px #333;
`;