import avatar from '../../assets/avatar.png'
import Stats from '../../components/stats'
import { useContext, useState} from "react";
import { useAuth } from "../../contexts/AuthContext";

function Profile() {
  const { userInfos } = useAuth();

console.log("User Info in Profiled:", userInfos); // Debugging line
  return (
    <div className="min-h-screen justify-center bg-purple-light max-w-263 mx-auto py-8 my-10">
      <div className="flex gap-4">
        <div className="p-4 w-1/2">
          <div className=" bg-white rounded-2xl py-4 px-8 flex items-center gap-4">
            <div className="w-26 h-29.25 rounded-xl overflow-hidden">
              <img
                src={avatar}
                alt="avatar Clara Dupont"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-120"
              />
            </div>
            <div >
              <h1 className="text-2xl font-bold text-black">{userInfos.profile.firstName} {userInfos.profile.lastName}</h1>
              <p className="text-grey">Membre depuis le 14 juin 2023</p>
            </div>
          </div>
          <div className=" bg-white rounded-2xl py-4 px-8 mt-4">
            <h2 className="text-grey pb-4">Votre profil</h2>
            <hr className="border-grey pb-4" />
            <p className="text-grey text-base pb-4">Âge : 29</p>
            <p className="text-grey text-base pb-4">Genre : Femme</p>
            <p className="text-grey text-base pb-4">Taille : 1m68</p>
            <p className="text-grey text-base pb-4">Poids : 58kg</p>
          </div>
        </div>
        <div className="py-4 w-1/2">
          <h2 className="text-black text-xl">Vos statistiques</h2>
          <p className="text-grey pb-4">depuis le 14 juin 2023</p>
          <div className="grid grid-flow-rows grid-cols-2 gap-4">
            <Stats intitule="Temps total couru" text="27h" sstext="15min" />
            <Stats intitule="Calories brûlées" text="25000" sstext="cal" />
            <Stats intitule="Distance totale parcourue" text="312" sstext="km" />
            <Stats intitule="Nombre de jours de repos" text="9" sstext="jours" />
            <Stats intitule="Nombre de sessions" text="41" sstext="sessions" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile