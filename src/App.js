import './styles/App.css';
import { useEffect, useState } from 'react'
import { CheckSession  } from './services/Auth'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import MyMusic from './pages/MyMusic'
import MusicDetails from './components/MusicDetails'
import Nav from './components/Nav'

function App() {

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState('')

  let navigate = useNavigate()

  const checkToken = async () => {
    const user = await CheckSession()
    console.log('checktoken', user)
    setUser(user)
    toggleAuthenticated(true)
  }

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false);
    localStorage.clear();
    navigate('/')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    // const user = localStorage.getItem('user')


    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <Nav
      authenticated={authenticated}
      user={ user }
      handleLogOut={handleLogOut}
      />
     <main>
       <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login setUser={setUser}
          toggleAuthenticated={toggleAuthenticated} /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/home/mymusic" element={ <MyMusic /> } />
        <Route path="/home/musics/:id" element={ <MusicDetails /> }/>
       </Routes>
     </main>
    </div>
  );
}

export default App;
