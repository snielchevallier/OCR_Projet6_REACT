
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <h1>SportSee</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/profile">Mon profil</NavLink></li>
          <li><NavLink to="/login">Se deconnecter</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header