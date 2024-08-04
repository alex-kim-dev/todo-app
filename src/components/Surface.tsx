import styled from '@emotion/styled';

export const Surface = styled.div(({ theme: { palette } }) => ({
  backgroundColor: palette.bgSecondary,
  borderRadius: '0.5rem',
  boxShadow: '0 3.4rem 3rem hsla(0, 0%, 0%, 0.1)',
}));
