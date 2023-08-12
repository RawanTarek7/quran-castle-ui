import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider, CssBaseline, createTheme} from '@mui/material';
import App from './App';
import './assets/fonts/EBGaramond-Regular.ttf';
import './assets/fonts/EBGaramond-Bold.ttf';

import './index.css';

// Create a custom theme with the custom font
const theme = createTheme({
    typography: {
        fontFamily: 'EBGaramond-bold , sans-serif', // Use your custom font here
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </ThemeProvider>
);
