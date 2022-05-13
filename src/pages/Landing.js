import { Link } from 'react-router-dom'
const Landing = () => {


    return (
        <div>
            <div>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}

export default Landing