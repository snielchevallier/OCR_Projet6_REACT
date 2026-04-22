import avatar from '../assets/avatar.png'
import pictoAcchievement from '../assets/picto-achievement.png'

function DashUserInfos() {
  return (
    <div className="bg-linear-to-b from-white to-purple-light max-w-263 mx-auto flex items-center gap-4 py-8 px-8 mt-30 rounded-t-2xl">
        <div className="w-26 h-29.25 rounded-xl overflow-hidden">
            <img
            src={avatar}
            alt="avatar Clara Dupont"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-120"
            />
        </div>
        <div >
            <h1 className="text-2xl font-bold text-black">Clara Dupont</h1>
            <p className="text-grey">Membre depuis le 14 juin 2023</p>
        </div>
        <div  className="ml-auto text-grey">
            Distance totale parcourue
        </div>
        <div className="bg-blue text-white text-2xl py-2 px-4 rounded-2xl w-45.75 h-22.5 flex items-center justify-center">
            <img src={pictoAcchievement} alt="picto achievement" className="w-8.5 h-8.5 inline-block mr-2"/>
            312 km
        </div>
    </div>
  )
}

export default DashUserInfos