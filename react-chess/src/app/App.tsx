import { Box, Link, ThemeProvider } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { myAppLink } from '../components/Constants'
import { Typography } from '@mui/material'
import theme from '../components/utils/theme'
import style from './style.module.scss'
function App() {
    return (
        <>
            <Typography variant="h1" color="primary">
                Hello it's Home page
            </Typography>

            <Box className={style.links}>
                <Link component={RouterLink} to={`${myAppLink}/game`}>
                    Go to Game Page
                </Link>
                <Link component={RouterLink} to={`${myAppLink}/registration`}>
                    Go to Registration Page
                </Link>
                <Link component={RouterLink} to={`${myAppLink}/signIn`}>
                    Go to SignIn Page
                </Link>
            </Box>
        </>
    )
}

export default function ToggleColorMode() {
    return (
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    )
}
