import { css } from 'styled-components';

export const Theme = css`
  :root {
    --color-primary: #f59f00;

    &[data-theme='light'] {
      --color-default: var(--color-black);
      --color-bg: #fff;
      --color-gray: #666;
      --color-gray-hover: #868e96;
      --color-caption: #999;
      --color-line-gray: #ededec;
      --color-line-bookmark: #dfdfde;
      --color-bg-header: hsla(0, 0%, 100%, 0.8);
    }
    &[data-theme='dark'] {
      --color-default: var(--color-white);
      --color-bg: #2f3437;
      --color-gray: #ededec;
      --color-gray-hover: #adb5bd;
      --color-caption: #808080;
      --color-line-gray: #666;
      --color-line-bookmark: #555;
      --color-bg-header: hsla(0, 0%, 100%, 0);
    }
  }
`;
