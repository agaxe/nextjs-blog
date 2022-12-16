import { css } from 'styled-components';

export const variable = css`
  :root {
    //* color
    --color-black: #333;
    --color-gray: #666;
    --color-white: #fff;
    --color-line-gray: var(--fg-color-0);

    //* layout
    --layout-inner-w: 720px;
    --layout-side-pd: 16px;
    --layout-page-header-h: 184px;
  }
`;
