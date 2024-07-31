import { css, Global } from '@emotion/react';

import type { Theme } from '~/theme';

const globalCss = ({ palette }: Theme) => css`
  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${palette.bgPrimary};
    color: ${palette.text};
    font-size: 1.6rem;
    font-family: 'Josefin Sans', sans-serif;
    line-height: normal;
    letter-spacing: -0.015em;
    word-break: break-word;
  }
`;

export const srOnly = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
`;

export const GlobalCss: React.FC = () => {
  return <Global styles={globalCss} />;
};
