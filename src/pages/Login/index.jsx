import bgLogin from '../../assets/bg-login.png'
import Button from '../../components/Button'

const Login = () => {
  return (
    <div className="bg-purple-light flex">
      <div className="w-2/5">
        <div className="w-sm mx-auto pt-20 pb-30">logo sportsee</div>
        <div className="bg-white rounded-xl p-8 w-sm mx-auto">
          <h1 className="text-[28px]/8 text-blue font-bold mb-4">Transformez <br />vos stats en résultats</h1>
          <h2 className="text-[22px] text-black pb-5">
            Se connecter
          </h2>
          <form>
            <div className="mb-6">
              <label className="block text-grey text-sm mb-2" htmlFor="email">
                Adresse email
              </label>
              <input className="border-grey appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-blue" id="email" type="email" placeholder="Adresse email" />
            </div>
            <div className="mb-10">
              <label className="block text-grey text-sm mb-2" htmlFor="password">
                Mot de passe
              </label>
              <input className="border-grey appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-blue" id="password" type="password" placeholder="Mot de passe" />
            </div>
            <div className="mb-10">
              <Button>Se connecter</Button>
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