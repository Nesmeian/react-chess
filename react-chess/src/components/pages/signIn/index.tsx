import { Link } from 'react-router-dom'
import { myAppLink } from '../../Constants'
import { Typography } from '@mui/material'
import Header from '../../loyalt/header'
export default function SignIn() {
    return (
        <>
            <Header />
            <Typography variant="h1">Hello it's sign in page</Typography>
            <Link to={`${myAppLink}/`}>To Home page</Link>
        </>
    )
}
