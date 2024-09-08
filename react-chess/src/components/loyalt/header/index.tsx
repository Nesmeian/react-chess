import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link as LinkRouter, useLocation } from 'react-router-dom'
import { myAppLink } from '../../Constants'
export default function Header() {
    const location = useLocation()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        News
                    </Typography>
                    {location.pathname === `${myAppLink}/login` && (
                        <Link
                            color="inherit"
                            component={LinkRouter}
                            to={`${myAppLink}/registration`}
                        >
                            Registration
                        </Link>
                    )}
                    {location.pathname === `${myAppLink}/registration` && (
                        <Link
                            component={LinkRouter}
                            to={`${myAppLink}/login`}
                            color="inherit"
                        >
                            Login
                        </Link>
                    )}
                    {!(
                        location.pathname === `${myAppLink}/registration` ||
                        location.pathname === `${myAppLink}/login`
                    ) && (
                        <Link
                            component={LinkRouter}
                            to={`${myAppLink}/`}
                            color="inherit"
                        >
                            Home
                        </Link>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
