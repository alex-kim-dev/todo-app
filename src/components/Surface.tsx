import styled from '@emotion/styled';

export const Surface = styled.div(
  ({ theme: { palette } }) => `
    background-color: ${palette.bgSecondary};
    border-radius: 0.5rem;
    box-shadow: 0 3.4rem 3rem hsla(0, 0%, 0%, 0.1);
  `,
);
