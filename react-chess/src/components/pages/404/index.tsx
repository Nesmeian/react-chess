import { Link } from 'react-router-dom'
import { myAppLink } from '../../Constants'

export default function ErrorElement() {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404</h1>
            <p>Oops! The page you're looking for does not exist.</p>
            <Link to={`${myAppLink}/`}>Go back to Home</Link>
        </div>
    )
}
