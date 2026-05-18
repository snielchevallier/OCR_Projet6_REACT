import { useState } from 'react';
import bgLogin from '../../assets/bg-login.png'
import Button from '../../components/CTAs/Button'
import logo from '../../assets/logo.gif'
import logoHeader from '../../assets/logo_header.svg'

import { useSelector, useDispatch } from "react-redux";
import { setCredentials, setAuthError } from "../../store/slices/authSlice";
import { setUserInfo } from "../../store/slices/userSlice";
import { setActivity } from "../../store/slices/activitySlice";
import { userInfo } from "../../data/userInfo";
import { userActivity } from "../../data/userActivity";
import { useNavigate } from "react-router-dom";

import { useLoginMutation } from '../../queries/authQueries';
import { useLazyGetUserInfoQuery } from '../../queries/userQueries';
import { useLazyGetUserActivityQuery } from '../../queries/activityQueries';

const Login = () => {

  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginMutation, { isLoading, isError,  error: apiError }] = useLoginMutation();
  const [fetchUserInfo] = useLazyGetUserInfoQuery();
  const [fetchUserActivity] = useLazyGetUserActivityQuery();
  const loginError = error || apiError?.data?.message || apiError?.error;
  const handleLogin = async (e) => {
    
    e.preventDefault();

    try {
      // Appeler l'API avec username et password
      dispatch(setAuthError(null));
      const result = await loginMutation({ username, password }).unwrap();
      
      // Stocker le token et le userId (dans Redux ou localStorage)
      dispatch(setCredentials({ token: result.token, userId: result.userId }));

      // Charger les données utilisateur
      const userInfoResult = await fetchUserInfo().unwrap();
      dispatch(setUserInfo(userInfoResult));
      //dispatch(setUserInfo(userInfo));
      const userActivityResult = await fetchUserActivity().unwrap();
      dispatch(setActivity(userActivityResult));
      //dispatch(setActivity(userActivity));
      
      navigate("/");
    } catch (err) {
       dispatch(setAuthError(err.data?.message || "Erreur de connexion"));
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
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-grey text-sm mb-2" htmlFor="username">
                Adresse email
              </label>
              <input
                className="border-grey appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-blue"
                id="username"
                type="text"
                placeholder="Adresse email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            {loginError && <p className="text-red-500 mb-4 text-center">{loginError}</p>}
            <div className="mb-10">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Connexion..." : "Se connecter"}
              </Button>
            </div>
            <p className="text-sm text-black mt-4 mb-10">
              Mot de passe oublié ?
            </p>
          </form>
        </div>
      </div>
      <div className="w-3/5 flex ">
        <img src={bgLogin} alt="Background" className="w-full aspect-auto " />
        <div className="absolute bottom-16 right-6 bg-white py-5 px-6 rounded-full shadow-lg">
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