import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import GlobalCss from './GlobalCss';
import getTheme, { ColorThemes } from './theme';

const Background = styled.div(
  ({ theme: { mq, palette } }) => `
    background: top center / 100% auto no-repeat
      url('/bg-mobile-${palette.colorTheme}.jpg');
    padding: 4.8rem 2.4rem;
    min-height: 100vh;

    ${mq.smUp} {
      background-image: url('/bg-desktop-${palette.colorTheme}.jpg');
      background-size: auto;
      padding: 6.4rem 3rem;
    }

    ${mq.mdUp} {
      padding: 7.8rem 3rem;
    }

    ${mq.xlUp} {
      background-size: 100%;
    }
  `,
);

const Container = styled.div`
  max-width: 54rem;
  margin: 0 auto;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={getTheme(ColorThemes.dark)}>
      <GlobalCss />
      <Background>
        <Container>
          <h1>Todo app</h1>
        </Container>
      </Background>
    </ThemeProvider>
  );
};

export default App;
