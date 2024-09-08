import { Link } from 'react-router-dom'
import { myAppLink } from '../../Constants'
import Header from '../../loyalt/header'
import { Typography } from '@mui/material'
export default function Game() {
    return (
        <>
            <Header />
            <Typography variant="h1">Hello it's game page</Typography>
            <Link to={`${myAppLink}/`}>To Home page</Link>
        </>
    )
}
