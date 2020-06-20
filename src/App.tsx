import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/themes/default';

import GlobalStyle, { AppContainer } from './styles/global';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import ResultGrid from './components/ResultGrid';


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <SearchBox />
        <ResultGrid />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
