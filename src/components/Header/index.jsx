
import { NavLink } from 'react-router-dom'
import { useAuth } from "../../contexts/AuthContext";

function Header() {
  return (
    <header className="header">
      <h1>SportSee</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/profile">Mon profil</NavLink></li>
          <li><a href="#" onClick={useAuth().logout}>Se deconnecter</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header