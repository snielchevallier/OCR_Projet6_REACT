import avatar from '../../assets/avatar.png'
import Stats from '../../components/stats'
import { useContext, useState} from "react";
import { useAuth } from "../../contexts/AuthContext";

function Profile() {
  const { userInfos, userActivityData } = useAuth();

  // Calculer les statistiques depuis userActivityData
  const nbSessions = userActivityData?.length || 0;
  const totalDistance = userActivityData?.reduce((acc, session) => acc + session.distance, 0).toFixed(1) || 0;
  const totalDuration = userActivityData?.reduce((acc, session) => acc + session.duration, 0) || 0;
  const totalCalories = userActivityData?.reduce((acc, session) => acc + session.caloriesBurned, 0) || 0;
  const totalDurationHours = Math.floor(totalDuration / 60);
  const totalDurationMinutes = totalDuration % 60;

  // Calculer le nombre de jours de repos
  const daysWithSessions = new Set(userActivityData?.map(session => session.date) || []);
  const nbDaysWithSessions = daysWithSessions.size;
  const firstDate = userInfos ? new Date(userInfos.profile.createdAt) : new Date();
  const lastDate = new Date();
  const totalDays = Math.floor((lastDate - firstDate) / (1000 * 60 * 60 * 24)) + 1;
  const restDays = totalDays - nbDaysWithSessions;

  console.log("User Info in Profile:", userInfos); // Debugging line
  return (
    <div className="min-h-screen justify-center bg-purple-light max-w-263 mx-auto py-8 my-10">
      <div className="flex gap-4">
        <div className="p-4 w-1/2">
          <div className=" bg-white rounded-2xl py-4 px-8 flex items-center gap-4">
            <div className="w-26 h-29.25 rounded-xl overflow-hidden">
              <img
                src={userInfos.profile.profilePicture}
                alt={`avatar ${userInfos.profile.firstName} ${userInfos.profile.lastName}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-120"
              />
            </div>
            <div >
              <h1 className="text-2xl font-bold text-black">{userInfos.profile.firstName} {userInfos.profile.lastName}</h1>
              <p className="text-grey">Membre depuis le {Intl.DateTimeFormat("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric"
              }).format(new Date(userInfos.profile.createdAt))}</p>
            </div>
          </div>
          <div className=" bg-white rounded-2xl py-4 px-8 mt-4">
            <h2 className="text-grey pb-4">Votre profil</h2>
            <hr className="border-grey pb-4" />
            <p className="text-grey text-base pb-4">Âge : {userInfos.profile.age}</p>
            <p className="text-grey text-base pb-4">Taille : {userInfos.profile.height}</p>
            <p className="text-grey text-base pb-4">Poids : {userInfos.profile.weight}</p>
          </div>
        </div>
        <div className="py-4 w-1/2">
          <h2 className="text-black text-xl">Vos statistiques</h2>
          <p className="text-grey pb-4">depuis le {Intl.DateTimeFormat("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric"
          }).format(new Date(userInfos.profile.createdAt))}</p>
          <div className="grid grid-flow-rows grid-cols-2 gap-4">
            <Stats intitule="Temps total couru" text={`${totalDurationHours}h`} sstext={`${totalDurationMinutes}min`} />
            <Stats intitule="Calories brûlées" text={`${totalCalories}`} sstext="cal" />
            <Stats intitule="Distance totale parcourue" text={`${totalDistance}`} sstext="km" />
            <Stats intitule="Nombre de jours de repos" text={`${restDays}`} sstext="jours" />
            <Stats intitule="Nombre de sessions" text={`${nbSessions}`} sstext="sessions" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile