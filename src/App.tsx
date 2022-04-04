import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import Content from './components/Content';
import Header from './components/Header';
import NewTodoForm from './components/NewTodoForm';
import GlobalCss from './GlobalCss';
import { useGlobalState } from './GlobalState';
import getTheme from './theme';

const Background = styled.div(
  ({ theme: { mq, palette } }) => `
    background: top center / 100% auto no-repeat
      url('./bg-mobile-${palette.colorTheme}.jpg');
    padding: 4.8rem 2.4rem;
    min-height: 100vh;

    ${mq.smUp} {
      background-image: url('./bg-desktop-${palette.colorTheme}.jpg');
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

const Hint = styled.p(
  ({ theme: { palette, mq } }) => `
    margin-top: 4.3rem;
    font-size: 1.4rem;
    text-align: center;
    color: ${palette.textSecondary};

    ${mq.mdUp} {
      margin-top: 5.2rem;
    }
  `,
);

const App: React.FC = () => {
  const [{ colorTheme }] = useGlobalState();

  return (
    <ThemeProvider theme={getTheme(colorTheme)}>
      <GlobalCss />
      <Background>
        <Container>
          <Header />
          <NewTodoForm />
          <Content />
          <Hint>Long press on a task to activate drag and drop</Hint>
        </Container>
      </Background>
    </ThemeProvider>
  );
};

export default App;
