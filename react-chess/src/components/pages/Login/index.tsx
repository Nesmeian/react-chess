import { Link as LinkRouter } from 'react-router-dom'
import { myAppLink } from '../../Constants'
import { Link, Typography } from '@mui/material'
import Header from '../../loyalt/header'
export default function Login() {
    return (
        <>
            <Header />
            <Typography variant="h1">Hello it's Login in page</Typography>
            <Link component={LinkRouter} to={`${myAppLink}/`} color="inherit">
                Go back to Home
            </Link>
        </>
    )
}
