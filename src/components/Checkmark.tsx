import styled from '@emotion/styled';

import { srOnly } from '../GlobalCss';

const Label = styled.label<{ checked: boolean }>(
  ({ theme: { mq, palette }, checked }) => `
    --size: 2rem;
    display: grid;
    justify-items: center;
    align-items: center;
    width: var(--size);
    height: var(--size);
    ${checked ? '' : `border: 0.1rem solid ${palette.muted};`}
    border-radius: 50%;
    background:
      center no-repeat url('./icon-check.svg'),
      linear-gradient(
        135deg,
        ${palette.bgGradient.from},
        ${palette.bgGradient.to}
      );

    &:hover {
      border: 0;
    }

    ${mq.smUp} {
      --size: 2.4rem;
    }

    & > input {
      grid-area: 1 / 1 / -1 / -1;
      appearance: none;
      margin: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      cursor: pointer;
    }

    & > span:last-of-type {
      display: block;
      grid-area: 1 / 1 / -1 / -1;
      width: calc(var(--size) - 0.2rem);
      height: calc(var(--size) - 0.2rem);
      border-radius: 50%;
      ${checked ? '' : `background-color: ${palette.bgSecondary};`}
    }
  `,
);

interface CheckmarkProps {
  checked: boolean;
  onChange: () => void;
}

const Checkmark: React.FC<CheckmarkProps> = ({ checked, onChange }) => {
  return (
    <Label checked={checked}>
      <span css={srOnly}>{checked ? 'Completed' : 'To do'}</span>
      <span />
      <input type='checkbox' checked={checked} onChange={onChange} />
    </Label>
  );
};

export default Checkmark;
