import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
    let authenticatedOptions
    if(user) {
        authenticatedOptions = (
            <nav>
                <Link className='link' to="/home">Home</Link>
                <Link className='link' to="/mymusic">My Music</Link>
                <Link className='link' onClick={handleLogOut} to="/">Log Out</Link>
            </nav>
        )
    }
    const publicOptions = (
        <nav>
            <Link className='link' to="/register">Register</Link>
            <Link className='link' to="/login">Login</Link>
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