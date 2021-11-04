//workaround to apply formatting (Prettier has a collision with styled-components)
import {createGlobalStyle} from 'styled-components';
const styled = {createGlobalStyle};

export const GlobalStyle = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    background: ${(props) => props.theme.background[100]};
    color: ${(props) => props.theme.text};
  }

  nav ul {
    list-style: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  button {
    cursor: pointer;
  }

  .gutter {
    background-color: ${(props) => props.theme.background[100]};
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .gutter-horizontal {
    background-image: url('data:image/svg+xml;base64,ICAgIDxzdmcgd2lkdGg9IjYiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCA2IDE4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgICA8ZyBjbGlwUGF0aD0idXJsKCNjbGlwMCkiPgogICAgICAgIDxjaXJjbGUgY3g9IjMiIGN5PSIyIiByPSIyIiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjIiIC8+CiAgICAgICAgPGNpcmNsZSBjeD0iMyIgY3k9IjkiIHI9IjIiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMiIgLz4KICAgICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iMTYiIHI9IjIiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuMiIgLz4KICAgICAgPC9nPgogICAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KICAgICAgICAgIDxyZWN0IHg9IjAiIHdpZHRoPSI2IiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIgLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgICA8L2RlZnM+CiAgICA8L3N2Zz4K');
    cursor: col-resize;
  }
`;