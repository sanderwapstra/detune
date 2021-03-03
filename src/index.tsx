import LogRocket from 'logrocket';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { BaseCSS, GridThemeProvider } from 'styled-bootstrap-grid';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/store';
import { theme, gridTheme } from './styles/theme';

LogRocket.init('bhxbik/detune');
ReactGA.initialize('UA-167595336-1');

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        background-color: #101314;
        color: #fff;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hgroup,
    ul,
    ol,
    dd,
    p,
    figure,
    blockquote,
    pre,
    table,
    fieldset,
    hr {
        margin: 0;
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GridThemeProvider gridTheme={gridTheme}>
                    <>
                        <Normalize />
                        <BaseCSS />
                        <GlobalStyle />
                        <App />
                    </>
                </GridThemeProvider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
