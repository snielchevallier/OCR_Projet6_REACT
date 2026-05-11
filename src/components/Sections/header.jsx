  import { NavLink } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";

import logo from '../../assets/logo.gif'
import logoHeader from '../../assets/logo_header.svg'

function Header() {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
  e.preventDefault();
  dispatch(logout());
};

  return (
    <header className="bg-purple-light flex max-w-6xl mx-auto">
      <nav className="flex flex-row items-center justify-between w-full py-4 px-6">
        <NavLink to="/" className="flex flex-row"><img src={logo} alt="logo Sportsee" className="w-8 h-8" /> <img src={logoHeader} alt="Sportsee" className="h-8 ml-2" /></NavLink>
        <ul className="flex flex-row items-center bg-white rounded-full py-4 px-14 gap-16">
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/profile">Mon profil</NavLink></li>
          <li className="border-l pl-16"><a href="#" onClick={handleLogout}>Se deconnecter</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header