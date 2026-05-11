
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.gif'
function Footer() {
  return (
    <footer className="bg-white flex">
       <nav className="flex flex-row items-center justify-between w-full py-4 px-6 text-sm text-black">
        <div className="">&copy;Sportsee Tous droits réservés</div>
        <ul className="flex flex-row items-center bg-white rounded-full py-4 px-14 gap-8">
          <li><NavLink to="/">Conditions générales</NavLink></li>
          <li><NavLink to="/">Contact</NavLink></li>
          <li><img src={logo} alt="logo Sportsee" className="w-5 h-5 rotate-180" /> </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer