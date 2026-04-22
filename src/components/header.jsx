
import { NavLink } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext";

function Header() {
  return (
    <header className="bg-purple-light flex max-w-6xl mx-auto">
      <nav className="flex flex-row items-center justify-between w-full py-4 px-6">
        <NavLink to="/"><div className="w-sm mx-auto">logo sportsee</div></NavLink>
        <ul className="flex flex-row items-center bg-white rounded-full py-4 px-14 gap-16">
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/profile">Mon profil</NavLink></li>
          <li className="border-l pl-16"><a href="#" onClick={useAuth().logout}>Se deconnecter</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header