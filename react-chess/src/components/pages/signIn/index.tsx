import { Link } from 'react-router-dom'
import { myAppLink } from '../../Constants'
export default function signIn() {
    return (
        <>
            <h1>Hello it's sign in page</h1>
            <Link to={`${myAppLink}/`}>To Home page</Link>
        </>
    )
}
