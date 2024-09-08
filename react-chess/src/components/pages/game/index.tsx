import { Link as LinkRouter } from 'react-router-dom'
import { myAppLink } from '../../Constants'
import Header from '../../loyalt/header'
import { Link, Typography } from '@mui/material'
export default function Game() {
    return (
        <>
            <Header />
            <Typography variant="h1">Hello it's game page</Typography>
            <Link component={LinkRouter} to={`${myAppLink}/`}>
                Go back to Home
            </Link>
        </>
    )
}
