import styled from '@emotion/styled';
import type { ChangeEventHandler } from 'react';

import { hidden } from '~/GlobalCss';

interface CheckmarkProps {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Label = styled.label<Pick<CheckmarkProps, 'checked'>>(
  ({ theme: { mq, palette }, checked }) => {
    const bg = `
      center no-repeat url('./icon-check.svg'),
      linear-gradient(
        135deg,
        ${palette.bgGradient.from},
        ${palette.bgGradient.to}
      )
    `;

    return {
      '--size': '2rem',
      display: 'grid',
      justifyItems: 'center',
      alignItems: 'center',
      inlineSize: 'var(--size)',
      blockSize: 'var(--size)',
      borderRadius: '50%',
      cursor: 'pointer',
      background: checked ? bg : palette.muted,

      '&:hover': {
        background: bg,
      },

      [mq.smUp]: {
        '--size': '2.4rem',
      },

      '&::after': {
        content: '""',
        display: 'block',
        gridArea: '1 / 1 / -1 / -1',
        inlineSize: 'calc(var(--size) - 0.2rem)',
        blockSize: 'calc(var(--size) - 0.2rem)',
        borderRadius: '50%',
        backgroundColor: checked ? 'transparent' : palette.bgSecondary,
      },
    };
  },
);

export const Checkmark: React.FC<CheckmarkProps> = ({ checked, onChange }) => {
  return (
    <Label checked={checked}>
      <span css={hidden}>{checked ? 'Completed' : 'To do'}</span>
      <input
        type='checkbox'
        css={hidden}
        checked={checked}
        onChange={onChange}
      />
    </Label>
  );
};
