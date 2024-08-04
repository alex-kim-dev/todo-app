import styled from '@emotion/styled';
import type { ChangeEventHandler } from 'react';

import { hidden } from '~/GlobalCss';

const Label = styled.label<{ checked: boolean }>(
  ({ theme: { mq, palette }, checked }) => ({
    '--size': '2rem',
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    inlineSize: 'var(--size)',
    blockSize: 'var(--size)',
    border: checked ? 'initial' : `0.1rem solid ${palette.muted}`,
    borderRadius: '50%',
    background: `
      center no-repeat url('./icon-check.svg'),
      linear-gradient(
        135deg,
        ${palette.bgGradient.from},
        ${palette.bgGradient.to}
      )`,

    '&:hover': {
      border: 0,
    },

    [mq.smUp]: {
      '--size': '2.4rem',
    },

    '& > input': {
      gridArea: '1 / 1 / -1 / -1',
      appearance: 'none',
      margin: 0,
      inlineSize: '100%',
      blockSize: '100%',
      borderRadius: '50%',
      cursor: 'pointer',
    },

    '& > span:last-of-type': {
      display: 'block',
      gridArea: '1 / 1 / -1 / -1',
      inlineSize: 'calc(var(--size) - 0.2rem)',
      blockSize: 'calc(var(--size) - 0.2rem)',
      borderRadius: '50%',
      backgroundColor: checked ? undefined : palette.bgSecondary,
    },
  }),
);

interface CheckmarkProps {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Checkmark: React.FC<CheckmarkProps> = ({ checked, onChange }) => {
  return (
    <Label checked={checked}>
      <span css={hidden}>{checked ? 'Completed' : 'To do'}</span>
      <span />
      <input type='checkbox' checked={checked} onChange={onChange} />
    </Label>
  );
};
