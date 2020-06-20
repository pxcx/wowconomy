import React from 'react';
import strings from '../../resources/strings';

import { Container } from './styles';

const Header: React.FC = () => {
  return(
    <Container>
      { strings.appTitle }
    </Container>
  );
};

export default Header;