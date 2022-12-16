import { css } from 'styled-components';

export const notion = css`
  .notion-app {
    ul,
    li {
      list-style: initial;
    }
  }

  .notion-collection-page-properties {
    .notion-collection-column-title {
      display: none;
    }
  }

  .notion-collection-row-property {
    .notion-property {
      display: flex;
      justify-content: center;
    }
  }

  .notion-page {
    .notion-table-of-contents.notion-gray {
      display: none;
      & + .notion-hr {
        display: none;
      }
    }
    .notion-title {
      text-align: center;
    }
  }
  .notion-collection-row-body {
    gap: 4px;
  }

  .notion-frame {
    padding: 0;
  }
`;
