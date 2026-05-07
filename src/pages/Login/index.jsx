import { useEffect } from 'react';
import { useState } from 'react';
import bgLogin from '../../assets/bg-login.png'
import Button from '../../components/Button'
import logo from '../../assets/logo.gif'
import logoHeader from '../../assets/logo_header.svg'

import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";
import { setUserInfo } from "../../store/slices/userSlice";
import { setActivity } from "../../store/slices/activitySlice";
import { userInfo } from "../../data/userInfo";
import { userActivity } from "../../data/userActivity";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    // fake login (remplace par API plus tard)
    e.preventDefault();
    // 1. Dispatcher l'action async login avec email/password
    const result = await dispatch(login({ email, password }));

    // 2. Vérifier si la connexion a réussi (login.fulfilled)
    if (result.payload) {
      // 3. Charger les données utilisateur dans Redux
      dispatch(setUserInfo(userInfo));
      
      // 4. Charger les données d'activité dans Redux
      dispatch(setActivity(userActivity));
      // 5. Naviguer vers le dashboard
      navigate("/");
    } else {
      // Sinon, l'erreur s'affiche déjà via le state.auth.error
      console.error("Login failed");
    }
  };
  return (
    <div className="bg-purple-light flex">
      <div className="w-2/5">
        <div className="w-sm mx-auto pt-20 pb-30 flex flex-row"><img src={logo} alt="logo Sportsee" className="w-8 h-8" /> <img src={logoHeader} alt="Sportsee" className="h-8 ml-2" /></div>
        <div className="bg-white rounded-xl p-8 w-sm mx-auto">
          <h1 className="text-[28px]/8 text-blue font-bold mb-4">Transformez <br />vos stats en résultats</h1>
          <h2 className="text-[22px] font-semibold text-black pb-5">
            Se connecter
          </h2>
          <form>
            <div className="mb-6">
              <label className="block text-grey text-sm mb-2" htmlFor="email">
                Adresse email
              </label>
              <input
                className="border-grey appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-blue"
                id="email"
                type="email"
                placeholder="Adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-10">
              <label className="block text-grey text-sm mb-2" htmlFor="password">
                Mot de passe
              </label>
              <input
                className="border-grey appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-blue"
                id="password"
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-10">
              <Button onClick={handleLogin}>Se connecter</Button>
            </div>
            <p className="text-sm text-black mt-4 mb-10">
              Mot de passe oublié ?
            </p>
          </form>
        </div>
      </div>
      <div className="w-3/5 relative">
        <img src={bgLogin} alt="Background" className="w-full aspect-auto" />
        <div className="absolute bottom-6 right-6 bg-white py-5 px-6 rounded-full shadow-lg">
          <p className="text-sm text-blue">
            Analysez vos performances en un clin d’œil,<br />
            suivez vos progrès et atteignez vos objectifs.
          </p>
        </div>
      </div>
    </div>

  )
}

export default Login