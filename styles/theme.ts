import { css } from 'styled-components';

export const theme = css`
  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: #2f3437;
    }
  }
`;
