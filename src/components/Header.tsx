import styled from '@emotion/styled';
import type { ComponentProps } from 'react';

import { setColorTheme } from '~/actions';
import { hidden } from '~/GlobalCss';
import { useGlobalState } from '~/GlobalState';
import { ColorThemes } from '~/types';

const Container = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Heading = styled.h1(({ theme: { palette, mq } }) => ({
  color: palette.white,
  fontSize: '2.7rem',
  fontWeight: 700,
  letterSpacing: '0.37em',
  textTransform: 'uppercase',

  [mq.smUp]: {
    fontSize: '3.4rem',
  },

  [mq.mdUp]: {
    fontSize: '4rem',
  },
}));

const ThemeSwitch = styled.button(({ theme: { palette, mq } }) => ({
  inlineSize: '4rem',
  blockSize: '4rem',
  border: 0,
  borderRadius: '50%',
  padding: 0,
  margin: '-1rem',
  background: `center / 2rem no-repeat url('./icon-${
    palette.colorTheme === ColorThemes.dark ? 'sun' : 'moon'
  }.svg')`,
  cursor: 'pointer',
  transition: 'background-color 0.2s',

  '&:hover, &:active': {
    backgroundColor: 'hsla(0, 0%, 100%, 0.3)',
  },

  [mq.smUp]: {
    margin: '-0.7rem',
    backgroundSize: '2.6rem',
  },
}));

export const Header: React.FC = () => {
  const {
    state: { colorTheme },
    dispatch,
  } = useGlobalState();
  const isDarkThemeOn = colorTheme === ColorThemes.dark;

  const handleThemeSwitchClick: ComponentProps<
    typeof ThemeSwitch
  >['onClick'] = () => {
    dispatch(
      setColorTheme(isDarkThemeOn ? ColorThemes.light : ColorThemes.dark),
    );
  };

  return (
    <Container>
      <Heading>Todo</Heading>
      <ThemeSwitch
        type='button'
        role='switch'
        aria-checked={isDarkThemeOn}
        onClick={handleThemeSwitchClick}
      >
        <span css={hidden}>Dark theme</span>
      </ThemeSwitch>
    </Container>
  );
};
