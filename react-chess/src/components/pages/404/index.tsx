import { Link as LinkRouter } from 'react-router-dom'
import { myAppLink } from '../../Constants'
import { Link } from '@mui/material'

export default function ErrorElement() {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404</h1>
            <p>Oops! The page you're looking for does not exist.</p>
            <Link component={LinkRouter} to={`${myAppLink}/`} color="inherit">
                Go back to Home
            </Link>
        </div>
    )
}
