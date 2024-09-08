import { createTheme } from '@mui/material'
// import themePalette from './pallette'
import themeTextField from './components/themeTextField'
import themeButton from './components/themeButtton'
import themeLink from './components/themeLink'
import themeTypography from './typography'
import themePalette from './pallette'
const themeMode = 'dark'
const theme = createTheme({
    palette: themePalette(themeMode),
    components: {
        MuiTextField: themeTextField(),
        MuiButton: themeButton(),
        MuiLink: themeLink(themeMode),
    },
    typography: themeTypography(),
})
export default theme
