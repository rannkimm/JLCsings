import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
    let authenticatedOptions
    if(user) {
        authenticatedOptions = (
            <div>
                <Link to="/home">Home</Link>
                <Link to="/mymusic">My Music</Link>
                <Link onClick={handleLogOut} to="/">Log Out</Link>
            </div>
        )
    }
    const publicOptions = (
        <div>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </div>
    )

    return (
        <div>
            <div> 
                {authenticated && user ? authenticatedOptions : publicOptions}
            </div>
        </div>
    )
}

export default Nav