import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Link as LinkRouter, useLocation } from 'react-router-dom'
import { myAppLink } from '../../Constants'
import styles from './styles.module.scss'
import logo from '../../assets/images/smile_logo.jpg'
export default function Header() {
    const location = useLocation()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <img
                        src={logo}
                        alt="Logo"
                        width={40}
                        style={{ borderRadius: '50%' }}
                    ></img>
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
                        <Box className={styles.links__container}>
                            <Link
                                component={LinkRouter}
                                to={`${myAppLink}/registration`}
                                color="inherit"
                            >
                                Registration
                            </Link>
                            <Link
                                component={LinkRouter}
                                to={`${myAppLink}/login`}
                                color="inherit"
                            >
                                Login
                            </Link>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
