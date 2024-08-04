import styled from '@emotion/styled';
import type { ChangeEventHandler } from 'react';

import { hidden } from '~/GlobalCss';
import { Filters } from '~/types';

import { Surface } from './Surface';

const Fieldset = styled(Surface.withComponent('fieldset'))(
  ({ theme: { mq } }) => ({
    marginBlockStart: '1.6rem',
    paddingInline: '1.6rem',
    paddingBlock: '1.8rem 1.6rem',
    border: 0,
    fontSize: '1.4rem',
    fontWeight: 700,
    textAlign: 'center',

    [mq.mdUp]: {
      position: 'absolute',
      bottom: 0,
      insetInlineStart: '50%',
      maxBlockSize: '22rem',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      transform: 'translateX(-50%)',
    },
  }),
);

const Option = styled.label<{ checked?: boolean }>(
  ({ theme: { palette }, checked }) => ({
    display: 'inline-block',
    position: 'relative',
    color: checked ? palette.accent : palette.textSecondary,
    textTransform: 'capitalize',
    transition: 'color 0.15s',

    '&:not(:first-of-type)': {
      marginInlineStart: '1.8rem',
    },

    '&:hover': {
      color: checked ? 'initial' : palette.text,
    },

    '& > input': {
      appearance: 'none',
      position: 'absolute',
      insetBlockStart: 0,
      insetInlineStart: 0,
      margin: 0,
      inlineSize: '100%',
      blockSize: '100%',
      cursor: 'pointer',
    },
  }),
);

interface FilterProps {
  option: Filters;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Filter: React.FC<FilterProps> = ({ option, onChange }) => {
  return (
    <Fieldset aria-controls='todo-list'>
      <legend css={hidden}>Filter todos</legend>
      {Object.values(Filters).map((value) => (
        <Option checked={option === value} key={value}>
          {value}
          <input
            type='radio'
            name='filter'
            value={value}
            checked={option === value}
            onChange={onChange}
          />
        </Option>
      ))}
    </Fieldset>
  );
};
