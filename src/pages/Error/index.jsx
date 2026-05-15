import { NavLink } from "react-router-dom"
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">erreur 404</h1>
      <p className="text-">La page que vous cherchez semble introuvable.</p>
      <NavLink to="/" className="bg-button text-button-text w-50 h-[51px] flex justify-center items-center hover:bg-button-hover cursor-pointer text-button-text py-2 px-4 rounded-xl duration-300">
        Retour à l'accueil
      </NavLink>
    </div>
  )
}
export default Error
