import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
    let authenticatedOptions
    if(user) {
        authenticatedOptions = (
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/mymusic">My Music</Link>
                <Link onClick={handleLogOut} to="/">Log Out</Link>
            </nav>
        )
    }
    const publicOptions = (
        <nav>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </nav>
    )

    return (
        <div>
            <nav> 
                {authenticated && user ? authenticatedOptions : publicOptions}
            </nav>
        </div>
    )
}

export default Nav