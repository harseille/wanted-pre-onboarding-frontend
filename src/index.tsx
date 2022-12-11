import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Global, css, ThemeProvider } from '@emotion/react';
import { globalStyle, theme } from './styles';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Global
      styles={css`
        ${globalStyle}
      `}
    />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);

reportWebVitals();
