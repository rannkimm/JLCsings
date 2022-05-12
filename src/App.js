import './styles/App.css';
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <div>
     <main>
       <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Home /> } />
       </Routes>
     </main>
    </div>
  );
}

export default App;
