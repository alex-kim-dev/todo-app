import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import { setColorTheme } from './actions';
import GlobalCss from './GlobalCss';
import { useGlobalState } from './GlobalState';
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
  const [{ colorTheme }, dispatch] = useGlobalState();

  return (
    <ThemeProvider theme={getTheme(colorTheme)}>
      <GlobalCss />
      <Background>
        <Container>
          <h1>Todo app</h1>
          <button
            type='button'
            onClick={() =>
              dispatch(
                setColorTheme(
                  colorTheme === ColorThemes.light
                    ? ColorThemes.dark
                    : ColorThemes.light,
                ),
              )
            }
          >
            Switch theme
          </button>
        </Container>
      </Background>
    </ThemeProvider>
  );
};

export default App;
