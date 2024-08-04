import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import { Content, Header, NewTodoForm } from '~/components';
import { GlobalCss } from '~/GlobalCss';
import { useGlobalState } from '~/GlobalState';
import { getTheme } from '~/theme';

const Background = styled.div(
  ({
    theme: {
      mq,
      palette: { colorTheme },
    },
  }) => ({
    background: `top center / 100% auto no-repeat url('./bg-mobile-${colorTheme}.jpg')`,
    paddingInline: '2.4rem',
    paddingBlock: '4.8rem',
    minBlockSize: '100vh',

    [mq.smUp]: {
      backgroundImage: `url('./bg-desktop-${colorTheme}.jpg')`,
      paddingBlock: '6.4rem',
      paddingInline: '3rem',
    },

    [mq.mdUp]: {
      paddingBlock: '7.8rem',
    },

    [mq.xlUp]: {
      backgroundSize: '100%',
    },
  }),
);

const Container = styled.div({
  maxInlineSize: '54rem',
  marginBlock: 0,
  marginInline: 'auto',
});

const Hint = styled.p(({ theme: { palette, mq } }) => ({
  marginBlockStart: '4.3rem',
  fontSize: '1.4rem',
  textAlign: 'center',
  color: palette.textSecondary,

  [mq.mdUp]: {
    marginBlockStart: '5.2rem',
  },
}));

export const App: React.FC = () => {
  const {
    state: { colorTheme },
  } = useGlobalState();

  return (
    <ThemeProvider theme={getTheme(colorTheme)}>
      <GlobalCss />
      <Background>
        <Container>
          <Header />
          <NewTodoForm />
          <Content />
          <Hint />
        </Container>
      </Background>
    </ThemeProvider>
  );
};
