import styled from '@emotion/styled';

import { srOnly } from '../GlobalCss';
import { Filters } from '../types';
import Surface from './Surface';

const Fieldset = styled(Surface.withComponent('fieldset'))(
  ({ theme: { mq } }) => `
    margin: 1.6rem 0 0;
    padding: 1.8rem 1.6rem 1.6rem;
    border: 0;
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;

    ${mq.mdUp} {
      position: absolute;
      bottom: 0;
      left: 50%;
      max-width: 22rem;
      background-color: transparent;
      box-shadow: none;
      transform: translateX(-50%);
    }
  `,
);

const Option = styled.label<{ checked?: boolean }>(
  ({ theme: { palette }, checked }) => `
    display: inline-block;
    position: relative;
    color: ${checked ? palette.accent : palette.textSecondary};
    text-transform: capitalize;
    transition: color 0.15s;

    &:not(:first-of-type) {
      margin-left: 1.8rem;
    }

    &:hover {
      ${checked ? '' : `color: ${palette.text};`}
    }

    & > input {
      appearance: none;
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  `,
);

interface FilterProps {
  option: Filters;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter: React.FC<FilterProps> = ({ option, onChange }) => {
  return (
    <Fieldset aria-controls='todo-list'>
      <legend css={srOnly}>Filter todos</legend>
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

export default Filter;
