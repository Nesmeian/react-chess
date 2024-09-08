import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './style.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Game from './components/pages/game/index.tsx'
import Registration from './components/pages/registration/index.tsx'
import { myAppLink } from './components/Constants/index.tsx'
import ErrorElement from './components/pages/404/index.tsx'
import { ThemeProvider } from '@mui/material/styles'
import theme from './components/utils/theme/index.tsx'
import { CssBaseline, Paper } from '@mui/material'
import Login from './components/pages/login/index.tsx'
const router = createBrowserRouter([
    {
        path: `${myAppLink}/`,
        element: <App />,
        errorElement: <ErrorElement />,
    },
    {
        path: `${myAppLink}/game`,
        element: <Game />,
    },
    {
        path: `${myAppLink}/registration`,
        element: <Registration />,
    },
    {
        path: `${myAppLink}/login`,
        element: <Login />,
    },
    {
        path: '*',
        element: <ErrorElement />,
    },
])
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Paper elevation={12} sx={{ height: '100%' }}>
                <RouterProvider router={router} />
            </Paper>
        </ThemeProvider>
    </StrictMode>
)
