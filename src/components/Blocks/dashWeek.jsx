import ChartWeek from "../Charts/Week";

import { useSelector } from "react-redux";
import { formatDateFrench, getMonday } from "../../utils/date";



function DashWeek() {
    const initialDateStart = getMonday(new Date());
const initialDateEnd = new Date(initialDateStart);
initialDateEnd.setDate(initialDateEnd.getDate() + 6);

//calcul les valeurs à afficher
const { sessions } = useSelector((state) => state.activity);
const sessionsThisWeek = sessions.filter(session => {
    const sessionDate = new Date(session.date);
    return sessionDate >= initialDateStart && sessionDate <= initialDateEnd;
});
//Objectifs
const done = sessionsThisWeek.length;
const todo = 7-done;
//Durée
const totalDuration = sessionsThisWeek.reduce((sum, session) => sum + session.duration, 0);
//Distance
const totalDistance = sessionsThisWeek.reduce((sum, session) => sum + session.distance, 0);
    return (
        <div className="bg-purple-light max-w-263 mx-auto py-8 mt-10 px-8">
            <h2 className="text-2xl text-black pb-4">Cette semaine</h2>
            <p className="text-black pb-4">Du {formatDateFrench(initialDateStart)} au {formatDateFrench(initialDateEnd)}</p>
            <div className="flex space-between gap-4 ">
                <div className="bg-white w-[445px] rounded-2xl py-4 px-6">
                    <ChartWeek done={done} todo={todo} />
                </div>
                <div className="w-[583px] gap-4 ml-4">
                    <div className="bg-white w-full rounded-2xl py-4 px-8">
                        <p className="text-grey pb-2">Durée d'activité</p>
                        <p className="text-blue text-2xl">{totalDuration} <span className="text-light-blue text-base">minutes</span></p>
                    </div>
                    <div className=" bg-white w-full rounded-2xl py-4 px-8 mt-4">
                        <p className="text-grey pb-2">Distance</p>
                        <p className="text-red text-2xl">{totalDistance} <span className="text-light-red text-base">kilomètres</span></p>
                    </div>
                </div>
            </div>
            
         </div>
    )
}

export default DashWeek