import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'
import Nav from '../components/Nav'

const Login = (props) => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ username: '', password: '' })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({
        username: "",
        password: "",
        })
        console.log(payload.id)
        localStorage.setItem('user', payload.id)
        props.setUser(payload)
        props.toggleAuthenticated(true)
         navigate('/home')
    }
    return (
        <div>
            <div> 
            <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div > Please Log in</div>
                    <div >
                        <label htmlFor='email'>Username</label>
                         <input
                            onChange={handleChange}
                            name="username"
                            type="text"
                            placeholder="Your Username"
                            value={formValues.username}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        value={formValues.password}
                        required
                        />
                    </div>
                    <button disabled={!formValues.username || !formValues.password}>Log In</button>
                </form> 
            </div>
        </div>
    )
}


export default Login