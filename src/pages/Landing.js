import { Link } from 'react-router-dom'
const Landing = () => {


    return (
        <div>
            <div>
                <Link to="/register" className="item1">Register</Link>
                <Link to="/login" className="item1">Login</Link>
            </div>
        </div>
    )
}

export default Landing