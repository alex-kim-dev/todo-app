import styled from '@emotion/styled';
import type { ComponentProps } from 'react';

import { setColorTheme } from '~/actions';
import { srOnly } from '~/GlobalCss';
import { useGlobalState } from '~/GlobalState';
import { ColorThemes } from '~/types';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h1(
  ({ theme: { palette, mq } }) => `
    color: ${palette.white};
    font-size: 2.7rem;
    font-weight: 700;
    letter-spacing: 0.37em;
    text-transform: uppercase;

    ${mq.smUp} {
      font-size: 3.4rem;
    }

    ${mq.mdUp} {
      font-size: 4rem;
    }
  `,
);

const ThemeSwitch = styled.button(
  ({ theme: { palette, mq } }) => `
    width: 4rem;
    height: 4rem;
    border: 0;
    border-radius: 50%;
    padding: 0;
    margin: -1rem;
    background: center / 2rem no-repeat url('./icon-${
      palette.colorTheme === ColorThemes.dark ? 'sun' : 'moon'
    }.svg');
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover, &:active {
      background-color: hsla(0, 0%, 100%, 0.3);
    }

    ${mq.smUp} {
      margin: -0.7rem;
      background-size: 2.6rem;
    }
  `,
);

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
        <span css={srOnly}>Dark theme</span>
      </ThemeSwitch>
    </Container>
  );
};
