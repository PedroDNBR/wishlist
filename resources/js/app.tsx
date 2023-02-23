// @ts-nocheck
import './bootstrap';
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

// createInertiaApp({
//     title: (title) => `${title} - ${appName}`,
//     resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
//     setup({ App, props }) {
//         return render(<ThemeProvider theme={theme}><GlobalStyles /><App {...props} /></ThemeProvider>);
//     },
//     progress: {
//         color: theme.grey[300],
//     },
// });


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        createRoot(el).render(<ThemeProvider theme={theme}><GlobalStyles /><App {...props} /></ThemeProvider>);
    },
    progress: {
        color: theme.grey[300],
    },
});