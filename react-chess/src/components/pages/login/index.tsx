import { Link } from 'react-router-dom'
import { myAppLink } from '../../Constants'
export default function login() {
    return (
        <>
            <h1>Hello it's login page</h1>
            <Link to={`${myAppLink}/`}>To Home page</Link>
        </>
    )
}
