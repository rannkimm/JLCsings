import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
// import Client from '../services/api'

const Register = () => {
    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    // const [usernameList, setUsernameList] = useState()
    // const [emailList, setEmailList] = useState()
    // const [usedInfo, setUsedInfo] = useState(true)

    // useEffect(()=> {
    //     const getUserInfo = async () => {
    //         let usernameArr = []
    //         let emailArr = []


    //         let result = await Client.get(`user_info`)
    //         console.log(result)
    //         // .map((name)=>{
    //         //     usernameArr.push(name.username)
    //         // })
    //         result.data.tEmails.map((email)=>{
    //             emailArr.push(email.email)
    //         })
    //         let alphaUsernameArr = usernameArr.sort((a, b) => a.localeCompare(b))
    //         let alphaEmailArr = emailArr.sort((a, b) => a.localeCompare(b))
    //         setUsernameList(alphaUsernameArr)
    //         setEmailList(alphaEmailArr)

    //     }
    //     getUserInfo()

    // }, [])
    // const redAlert = () => {
    //     setUsedInfo(!usedInfo)
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        // let formName = !usernameList.includes(formValues.username)
        // let formEmail = !emailList.includes(formValues.email)

            
        
        // if(formName && formEmail){
            await RegisterUser({
                firstName: formValues.firstName,
                lastName: formValues.lastName,
                username: formValues.username,
                email:formValues.email,
                password:formValues.password
              })
              setFormValues({
                  firstName: '',
                  lastName: '',
                  username: '',
                  email: '',
                  password: '',
                  confirmPassword: ''})
              navigate('/login')
        // }
        setFormValues({
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        // console.log('Used info')
        // setTimeout(redAlert, 3000)

        
    }

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    console.log(formValues)
    // console.log(emailList)
    // console.log(usernameList)

    return (
        <div>
            <Nav />
            <div >
            <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div >
                        <label htmlFor="name">First Name</label>
                        <br></br>
                        <input 
                        onChange={handleChange}
                        name="firstName"
                        type="text"
                        placeholder="Your Name"
                        value={formValues.firstName}
                        required
                        />
                    </div>
                    <div >
                        <label htmlFor="name">Last Name</label>
                        <br></br>
                        <input 
                        onChange={handleChange}
                        name="lastName"
                        type="text"
                        placeholder="Your Name"
                        value={formValues.lastName}
                        required
                        />
                    </div>
                    <div >
                        <label htmlFor="username">Username</label>
                        <br></br>
                        <input 
                        onChange={handleChange}
                        name="username"
                        type="text"
                        placeholder="Your Name"
                        value={formValues.username}
                        required
                        />
                    </div>
                    <div >
                        <label htmlFor="email">Email</label>
                        <br></br>
                        <input 
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="example@example.com"
                        value={formValues.email}
                        required
                        />
                    </div>
                    <div >
                        <label htmlFor="password">Password</label>
                        <br></br>
                        <input 
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formValues.password}
                        required
                        />
                    </div>
                    <div >
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <br></br>
                        <input className="input1"
                        onChange={handleChange}
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={formValues.confirmPassword}
                        required
                        />
                    </div>
                    <button 
                        disabled={
                        !formValues.email ||
                        (!formValues.password &&
                            formValues.confirmPassword === formValues.password)
                        }
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register