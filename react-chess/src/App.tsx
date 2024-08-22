import { Link } from 'react-router-dom'
import './App.css'
import { myAppLink } from './components/Constants'
function App() {
    return (
        <>
            <h1>Hello it's Home page</h1>
            <div className="links">
                <Link to={`${myAppLink}/game`}>Go to Game Page</Link>
                <Link to={`${myAppLink}/registration`}>
                    Go to Registration Page
                </Link>
                <Link to={`${myAppLink}/signIn`}>Go to SignIn Page</Link>
            </div>
        </>
    )
}

export default App
