import { Link } from 'react-router-dom'
import { myAppLink } from '../../Constants'
export default function game() {
    return (
        <>
            <h1>Hello it's game page</h1>
            <Link to={`${myAppLink}/`}>To Home page</Link>
        </>
    )
}
