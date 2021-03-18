import LogRocket from 'logrocket';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BaseCSS, GridThemeProvider } from 'styled-bootstrap-grid';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { map } from 'styled-components-breakpoint';
import { Normalize } from 'styled-normalize';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { persistor, store } from './store/store';
import { gridTheme, theme } from './styles/theme';
import { typography } from './styles/typography';

LogRocket.init('bhxbik/detune', {
    network: {
        isEnabled: false,
    },
});

ReactGA.initialize('UA-167595336-1');

// Connect GA to LogRocket
LogRocket.getSessionURL(function (sessionURL) {
    ReactGA.event({
        category: 'LogRocket',
        action: sessionURL,
    });
});

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        background-color: #14181a;
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

    h1 {
        ${map(typography.h2, (fontSize: string) => `font-size: ${fontSize};`)};

        line-height: 1.25;
    }

    h2 {
        ${map(typography.h2, (fontSize: string) => `font-size: ${fontSize};`)};

        line-height: 1.25;
        margin-bottom: 20px;
    }

    h3 {
        ${map(typography.h3, (fontSize: string) => `font-size: ${fontSize};`)};

        line-height: 1.5;
        margin-bottom: 12px;
    }

    .ReactModal__Body--open #root {
        filter: blur(2px);
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
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
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
