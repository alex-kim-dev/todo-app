import { css, Global } from '@emotion/react';

import type { Theme } from '~/theme';

const globalCss = ({ palette }: Theme) =>
  css({
    html: {
      fontSize: '62.5%',
    },

    body: {
      backgroundColor: palette.bgPrimary,
      color: palette.text,
      fontSize: '1.6rem',
      fontFamily: 'Josefin Sans, sans-serif',
      lineHeight: 'normal',
      letterSpacing: '-0.015em',
      overflowWrap: 'break-word',
    },
  });

export const hidden = css({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  border: 0,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
});

export const GlobalCss: React.FC = () => {
  return <Global styles={globalCss} />;
};
