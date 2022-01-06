import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Heading = styled.h1`
  font-family: sans-serif;
  text-align: center;
`;

export default function App() {
  return (
    <Heading
      css={css`
        color: #444;
      `}
    >
      Todo app
    </Heading>
  );
}
